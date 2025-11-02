import bcrypt from 'bcryptjs';
import user from '../models/user.js';
import dotenv from 'dotenv';
dotenv.config();


export const register=async (req,res)=>{
   try {
      const {name,email,password}=req.body;

      //encrypt the password
      const hashed=await bcrypt.hash(password,10);
      await user.create({
         name:name,
         email:email,
         password:hashed
      });

      res.status(200).json({
         message:"User Registered"
      })
      
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}

export const login=async(req,res)=>{
   try {

      const {email,password}=req.body;
      const user=await user.findOne({email});

      if(!user) return res.status(404).json({
         message:"User not found"
      })
      
      const match=bcrypt.compare(password,user.password);
      if(!match) return res.status(404).json({
         message:"Wrong password",
      });

      const token=jwt.sign(
         { 
            userId:user._id
         },
         process.env.JWT_SECRET
     );

     res.status(200).json({
      message:"Login Success",
      token
     });

   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      });
   }
}
