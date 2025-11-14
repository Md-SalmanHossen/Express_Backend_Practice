import User from "../models/user.model.js";
import  bcrypt from 'bcryptjs';

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
      
   } catch (error) {
      res.status(500).json({
         message:'Server internal error occur during login',
         error:error.message
      })
   }
}