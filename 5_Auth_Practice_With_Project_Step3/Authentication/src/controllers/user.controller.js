import User from "../models/user.model.js";
import  bcrypt from 'bcryptjs';
import generate_token from "../utils/jwt.utils.js";

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
      
   } catch (error) {
      
   }
}
