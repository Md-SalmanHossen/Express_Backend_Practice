import bcrypt from 'bcryptjs';
import user from '../models/user';
 
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