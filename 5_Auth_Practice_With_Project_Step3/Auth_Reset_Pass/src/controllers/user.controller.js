import UsersModel from './../models/Users.Model.js';
import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import OTPModel from '../models/OTP.Model.js';
import sendEmail from '../utils/email.utils.js';


export const signup=async (req,res)=>{
   try{
      const {email,firstName,lastName,mobile,password}=req.body;

      const userExist=await UsersModel.findOne({email});
      if(userExist){
         return res.status(400).json({
            status:'fail',
            message:'Email already exists'
         })
      }
      const salt=await bcrypt.genSalt(10)
      const hashedPass=await bcrypt.hash(password,salt);

      const result=await UsersModel.create({
         email,
         firstName,
         lastName,
         mobile,
         password:hashedPass
      });

      res.status(201).json({
         status:'Success',
         message:'Signup successfully',
         data:result
      });

   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during signup',
        error:error.message
     })
   }
}

export const login=async (req,res)=>{
   try{
       const {email,password}=req.body;
       const user=await UsersModel.findOne({email});

       if(!user){
         return res.status(404).json({
            status:"fail",
            message:'User not found'
         })
       }

      const isMatch =await bcrypt.compare(password,user.password);

       if(!isMatch){
         return res.status(400).json({
            status:'fail',
            message:'Wrong email or password'
         })
       };

       const token=jwt.sign(
         {id:user._id,email:user.email},
         process.env.JWT_SECRET,
         {expiresIn:"1h"}
       );

      res.status(200).json({
         status:'Success',
         message:'Login successfully',
         user_data:user,
         token
      });

   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during login',
        error:error.message
     })
   }
}

export const profileDetails=async (req,res)=>{
   try{
      if(!req.userId){
         return res.status(401).json({
            status:'fail',
            message:'Unauthorized'
         });
      }
       const user= await UsersModel.findById(req.userId).select('-password');
       if(!user){
         return res.status(404).json({
            status:'fail',
            message:'User not found'
         })
       }
      res.status(200).json({  
         status:'success',  
         message:'Profile fetched successfully',  
         user_data:user
      });

   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during fetch the profile',
        error:error.message
     })
   }
}

export const ProfileUpdate=async (req,res)=>{
   try{
      if(!req.userId){
         return res.status(401).json({
            status:'fail',
            message:'Unauthorized'
         });
      }
       const updateUser=await UsersModel.findByIdAndUpdate(
         req.userId,
         req.body,
         {new: true}
       ).select("-password");

       res.status(200).json({
         status:'success',
         message:'Profile updated successfully',
         user_data:updateUser
       });

   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during profile update',
        error:error.message
     })
   }
}

export const logout=async (req,res)=>{
   try{
       res.status(200).json({
         status:'success',
         message:'Logout successfully'
       })
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during logout',
        error:error.message
     })
   }
}

export const profileDelete=async (req,res)=>{
   try{
      if(!req.userId){
         return res.status(401).json({
            status:'fail',
            message:'Unauthorized'
         });
      }
       const deleteProfile=await UsersModel.findByIdAndDelete(req.userId);
       res.status(200).json({
         status:'success',
         message:'Profile deleted successfully',
         delete_data:deleteProfile
       })
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during delete profile',
        error:error.message
     })
   }
}

export const sendOTP=async (req,res)=>{
   try{
       const {email}=req.body;
       if(!email){
         return res.status(404).json({
            status:'fail',
            message:'Email is required'
         })
       }

       const otp=Math.floor(100000+Math.random()*900000);

       await OTPModel.create({
         email,
         otp,
         status:'Pending',
       });

       const response=await sendEmail(
         email,
         "Your Otp Code",
         `<h3>Your otp is: <b>${otp}</b></h3>`
       );

       if(!response.success){
         return res.status(500).json({
            status:'fail',
            message:'Email not sent',
            error:response.error
         })
       }

       res.status(200).json({
         status:'success',
         message:'OTP sent successfully'
       });

   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during send otp',
        error:error.message
     })
   }
}

export const verifyOTP=async (req,res)=>{
   try{
       const {email,otp}=req.body;

       const recordInfo=await OTPModel.findOne({email,otp,status:"Pending"});

       if(!recordInfo){
         return res.status(400).message({
            status:'fail',
            message:'Invalid OTP'
         })
       }

       await OTPModel.updateOne(
         {email,otp},
         {status:'Verified'}
       );

       res.status(200).json({
         status:'success',
         message:'OTP verified successfully'
       });


   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during verify otp',
        error:error.message
     })
   }
}

export const resetPassword=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}
