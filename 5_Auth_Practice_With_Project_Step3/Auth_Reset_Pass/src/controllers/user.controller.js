import UsersModel from './../models/Users.Model.js';

export const signup=async (req,res)=>{
   try{
      const {email,firstName,lastName,mobile,password}=req.body;

      const userExist=await UsersModel.findOne({email});
      if(!userExist){
         return res.status(400).json({
            status:'fail',
            message:'Email already exists'
         })
      }

      const result=await UsersModel.create({
         email,
         firstName,
         lastName,
         mobile,
         password
      });

      res.status(201).json({
         status:'Success',
         message:'Signup successfully',
         data:result
      });
      
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const login=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
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
