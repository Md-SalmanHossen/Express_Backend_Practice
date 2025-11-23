import bcrypt from 'bcryptjs';

import User from '../models/User.model.js';
import sendEmail from './../utils/email.utils.js';
import { jwt } from 'jsonwebtoken';



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

      const otp=String(Math.floor(100000+Math.random()*500000));
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
         message:'Server error during ',
         error:error.message
      })
   }
}

export const login=async(req ,res)=>{
   try {

      const {email,password}=req.body;
      if(!email || !password){
         return res.status(400).json({
            message:'All fields are require',
         })
      };

      const user=await User.findOne({email}).select('-password');
      if(!user){
         return res.status(404).json({
            message:'User not found'
         })
      };

      const matchedPass=await bcrypt.compare(password,user.password);
      if(!matchedPass){
         return res.status(400).json({
            message:"Wrong email or password"
         });
      }

      const token=jwt.sign(
         {id:user._id},
         process.env.JWT_SECRET,
         {expiresIn:"1d"}
      );

      res.status(200).json({
         message:'Login successfully',
         token
      })
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const profile=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const updateProfile=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const logout=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const sendVerifyEmail=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const forgotPassword=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const resetPassword=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}

export const changePassword=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during ',
         error:error.message
      })
   }
}