import bcrypt, { genSalt } from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

import User from '../models/User.model.js';
import sendEmail from './../utils/email.utils.js';



export const signup=async(req ,res)=>{
   try {

      const {name,email,password}=req.body;
      if(!name||!email||!password){
          return res.status(400).json({
            message:'All fields are required'
          });
      }

      const exists=await User.findOne({email});
      if(exists){
         return res.status(400).json({
            message:'Email already exists',
         })
      }

      const salt= await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(password,salt);

      const otp=Math.floor(100000+Math.random()*900000).toString();
      const otpExpire=Date.now()+5*60*1000;

      const user=await User.create({
         name,
         email,
         password:hashedPassword,
         otp,
         otpExpire
      });

      await sendEmail(
         email,
         "Verify your Email",
         `<h2>Your OTP is ${otp}<h2/>`
      );

      res.status(201).json({
         message:"Signup success.OTP sent to email",
         userId:user._id
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during login',
         error:error.message
      })
   }
}

export const verifyEmail=async(req ,res)=>{
   try {
      const {email,otp}=req.body;
      if(!email ||!otp){
         return res.status(400).json({
            message:'All filed are require'
         })
      }

      const user=await User.findOne({email});
      if(!user){
         return res.status(404).json({
            message:'User not found',
         })
      }

      if(user.otp!==otp){
         return res.status(400).json({
            message:'Invalid OTP'
         })
      };

      if(user.otpExpire<Date.now()){
         return res.status(400).json({
            message:'OTP expired'
         })
      };

      user.isEmailVerified=true;
      user.otp=null;
      user.otpExpire=null;

      await user.save();

      res.status(200).json({
         message:'Email verified successfully',
      });


   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during verify email',
         error:error.message
      })
   }
}

export const login=async(req ,res)=>{
   try {

      const {email,password}=req.body;
      if(!email || !password){
         return res.status(400).json({
            status:'fail',
            message:'All fields are require',
         })
      };

      const user=await User.findOne({email});
      if(!user){
         return res.status(404).json({
            status:'fail',
            message:'Wrong email or password'
         })
      };

      const matchedPass=await bcrypt.compare(password,user.password);
      if(!matchedPass){
         return res.status(400).json({
            status:'fail',
            message:"Wrong email or password"
         });
      }

      if(!user.isEmailVerified){
         return res.status(401).json({
            status:'fail',
            message:'Your email is not verified.Please verify your email first'
         })
      }
      const token=jwt.sign(
         {id:user._id},
         process.env.JWT_SECRET,
         {expiresIn:"1d"}
      );

      res.status(200).json({
         status:'success',
         message:'Login successfully',
         token
      })
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during login',
         error:error.message
      })
   }
}

export const profile=async(req ,res)=>{
   try {

       const getUser=await User.findById(req.userId);
       if(!getUser){
         return res.status(404).json({
            status:'fail',
            message:'User not found'
         });
       }

       const user=getUser.toObject();
       const filtered={
         name:user.name,
         email:user.email,
         role:user.role,
         bio:user.bio,
         avatar_url:user.avatar_Url,
         createdAt:user.createdAt
       };

       res.status(200).json({
         status:'success',
         message:'User fetched successfully',
         user:filtered
       });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during get profile',
         error:error.message
      })
   }
}

export const updateProfile=async(req ,res)=>{
   try {

      const {name,bio,avatar_Url}=req.body;
      if(!name && !bio &&avatar_Url){
         return res.status(400).json({
            status:'fail',
            message:'Nothing to update'
         })
      }

      const user=await User.findById(req.userId);
      if(!user){
         return res.status(404).json({
            status:'fail',
            message:'User not found',
         })
      }

      if(name) user.name=name;
      if(bio) user.bio=bio;
      if(avatar_Url) user.avatar_Url=avatar_Url;

      const updatedUser=await user.save();
      const userObj=updatedUser.toObject();

      const filteredInfo={
         name:userObj.name,
         email:userObj.email,
         role:userObj.role,
         bio:userObj.bio,
         avatar_Url:userObj.avatar_Url,
         createdAt:userObj.createdAt,
         updatedAt:userObj.updatedAt
      }

      res.status(200).json({
         status:'success',
         message:'Profile update successfully',
         user:filteredInfo
      })
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during update profile',
         error:error.message
      })
   }
}

export const forgotPassword=async(req ,res)=>{
   try {

      const {email}=req.body;
      if(!email){
         return res.status(400).json({
            status:'fail',
            message:'Email is required'
         });
      }

      const user=await User.findOne({email});
      if(!user){
         return res.status(400).json({
            status:'fail',
            message:'User not found'
         })
      }

      const otp=Math.floor(100000+Math.random()*900000).toString();
      const otpExpire=Date.now()+5*60*1000;
      
      user.otp=otp;
      user.otpExpire=otpExpire;
      await user.save();

      await sendEmail(
         email,
         "Reset Password OTP",
         `<div style="font-family:Arial;padding:20px">
            <h2>Reset Password Verification</h2>
            <p>Your OTP is: </p>
            <h1 style="background:#eeee;padding:10px;">${otp}</h1>
            <p>this OTP will expire in 5 minutes</p>
         </div>
         `
      );

      res.status(200).json({
         status:'success',
         message:'OTP sent for reset password successfully'
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during send otp',
         error:error.message
      })
   }
}

export const verifyOtpForReset=async(req ,res)=>{
   try {

      const {email,otp}=req.body;
      if(!email||!otp){
         return res.status(400).json({
            status:'fail',
            message:'Email and OTP are required',
         })
      }

      const user=await User.findOne({email});
      if(!user){
         return res.status(404).json({
            status:'fail',
            message:'User not found'
         });
      }

      if(user.otp!==otp){
         return res.status(400).json({
            status:'fail',
            message:'Invalid OTP'
         })
      }

      if(user.otpExpire<Date.now()){
         return res.status(400).json({
            status:'fail',
            message:'OTP expired.Please request a new OTP'
         })
      }

      const token=Math.random().toString(36).substring(2,15);
      const tokenExpire=Date.now()+10*60*1000;

      user.resetPasswordToken=token;
      user.resetPasswordExpired=tokenExpire;

      user.otp=null;
      user.otpExpire=null;

      await user.save();

      res.status(200).json({
         status:'success',
         message:'OTP verified successfully',
         resetPasswordToken:token,
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during verify otp',
         error:error.message
      })
   }
}

export const resetPassword=async(req ,res)=>{
   try {

      const {email,newPassword,resetPasswordToken}=req.body;
      if(!email||!newPassword ||!resetPasswordToken){
         return res.status(400).json({
            status:'fail',
            message:'All fields and reset token are require'
         })
      }

      const user=await User.findOne({email});
      if(!user){
         return res.status(404).json({
            status:'fail',
            message:'User not found'
         })
      }

      if(!user.resetPasswordToken!==resetPasswordToken){
         return res.status(400).json({
            status:'fail',
            message:'Invalid reset token'
         })
      }

      if(!user.resetPasswordExpired ||user.resetPasswordExpired<Date.now()){
         return res.status(400).json({
            status:'success',
            message:'Reset password token expired,Please restart the forgot password process'
         })
      }
      
      if(!user.otp || !user.otpExpire||user.otpExpire<Date.now()){
         return res.status(400).json({
            status:'fail',
            message:'OTP not verified or expired'
         })
      }

      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(newPassword,salt);

      user.password=hashedPassword;
      user.resetPasswordToken=null;
      user.resetPasswordExpired=null;
      user.otp=null;
      user.otpExpire=null;
      
      await user.save();

      res.status(200).json({
         status:'success',
         message:'Password reset successfully'
      });
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during reset password',
         error:error.message
      })
   }
}

export const changePassword=async(req ,res)=>{
   try {
      
      const userId=req.userId;

      const{oldPassword,newPassword}=req.body;
      if(!oldPassword || !newPassword){
         return res.status(400).json({
            status:'fail',
            message:'Both old and new password are required'
         })
      }

      const user=await User.findById(userId);
      if(!user){
         return res.status(404).json({
            status:'fail',
            message:'User not found'
         });
      }

      const isMatch=await bcrypt.compare(oldPassword,user.password);
      if(!isMatch){
         return res.status(400).json({
            status:'fail',
            message:'Old password is incorrect'
         });
      }

      const salt=await bcrypt.genSalt(10);
      const hashedPss=await bcrypt.hash(newPassword,salt);

      user.password=hashedPss;
      await user.save();

      res.status(200).json({
         status:'success',
         message:'Password changed successfully'
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during change password',
         error:error.message
      })
   }
}

export const logout=async(req ,res)=>{
   try {

      res.status(200).json({
         message:'success',
         message:'Logout success'
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during logout',
         error:error.message
      })
   }
}

export const profileDelete=async(req ,res)=>{
   try {

      const userId=req.userId;
      const deleteUser=await User.findByIdAndDelete(userId);

      if(!deleteUser){
         return res.status(404).json({
            status:'fail',
            message:'User not found or already deleted'
         })
      }

      res.status(200).json({
         status:'success',
         message:'User profile deleted successfully'
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during deleted profile',
         error:error.message
      })
   }
}

