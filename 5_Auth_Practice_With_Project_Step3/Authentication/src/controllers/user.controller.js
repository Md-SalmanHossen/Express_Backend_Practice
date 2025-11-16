import  bcrypt from 'bcryptjs';
import crypto from 'crypto';

import User from "../models/user.model.js";
import generate_token from "../utils/jwt.utils.js";
import transporter from '../utils/email.utils.js';

export const signup=async(req,res)=>{   
   try {
      const {name,email,password,profile_img}=req.body;

      if(!name||!email||!password){
         return res.status(400).json({
            status:'Failed',
            message:'Please provide name,email and password'
         })
      }

      const user=await User.findOne({email}).select('_id');

      if(user){
         return res.status(409).json({
            status:'Failed',
            message:'User already exists'
         })
      }
      const salt=await bcrypt.genSalt(10);
      const hashedPass=await bcrypt.hash(password,salt);

      const newUser=await User.create({
         name,
         email,
         password:hashedPass,
         profile_img
      }) 
      
      res.status(201).json({
         status:'successful',
         message:'User created',
         user:newUser
      })

   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during signup',
         error:error.message
      })
   }
}

export const login=async(req,res)=>{   
   try {
      const {email,password}=req.body;

      if(!email || !password){
         return res.status(400).json({
            message:'Please enter email and password',
         })
      }
      const user=await User.findOne({email}).select('+password');

      if(!user){
         return res.status(404).json({
            status:'failed',
            message:'Invalid email or password',
         })
      }

      const isValidPass=await bcrypt.compare(password,user.password);

      if(!isValidPass){
         return res.status(404).json({
            status:'failed',
            message:'Invalid email or password',
         })
      }

      const payload={
         id:user._id,
         email:user.email
      } 
      const token=generate_token(payload,res);

      console.log('token is',token);


      res.status(200).json({
         status:"Success",
         message:"User login successfully",
         token
      })

   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during login',
         error:error.message
      })
   }
}

export const getProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({
        status: "Failed",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "User profile fetched successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error fetching profile",
      error: error.message,
    });
  }
};

export const updateProfile=async(req ,res )=>{
   try {
      
      const id=req.user._id;
      const {name,email,profile_img}=req.body;

      const updateUser=await User.findByIdAndUpdate(
         id,
         {name,email,profile_img},
         {new:true,runValidators:true}
      );

      res.status(200).json({
         status:"Success",
         message:'Profile updated successfully',
         user:updateUser
      });

   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during update profile'
      })
   }
}

export const logout=async(req ,res )=>{
   try {
      res.cookie('token','',{
         httpOnly:true,
         expires:new Date(0)
      });

      res.status(200).json({
         status:"success",
         message:'User logout'
      });
      
   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during update profile'
      })
   }
}

export const forgotPassword=async(req ,res)=>{
   try {
      const {email}=req.body;

   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during forgot password',
         error:error.message
      })
   }
}

export const verifyResetToken=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during forgot password',
         error:error.message
      })
   }
}

export const resetPassword=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during forgot password',
         error:error.message
      })
   }
}

