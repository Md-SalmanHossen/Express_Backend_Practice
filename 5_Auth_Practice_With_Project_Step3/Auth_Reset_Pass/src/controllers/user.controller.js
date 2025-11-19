import UsersModel from './../models/Users.Model.js';
import  bcrypt, { genSalt }  from 'bcryptjs';
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

       if(user.password!==password){
         return res.json({
            status:'fail',
            message:'Wrong email or password'
         })
       };

      res.status(200).json({
         status:'Success',
         message:'Login successfully',
         user_data:user
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
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const ProfileUpdate=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const logout=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const profileDelete=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const verifyEmail=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const verifyOTP=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
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
