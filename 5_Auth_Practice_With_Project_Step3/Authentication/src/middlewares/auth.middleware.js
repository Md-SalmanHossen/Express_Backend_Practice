import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const auth_middleware=async(req ,res , next)=>{
   try {
      let token;

      if(req.cookies.jwt){
         token=req.cookies.jwt;
      }

      if(!token){
         return req.status(401).json({
            message:'Not authorized,no token provided'
         })
      }

      const decode=jwt.verify(token,process.env.JWT_SECRET);
      req.user=await User.findById(decode.id).select('-password');
      
      if(!req.user){
         res.status(404).json({
            message:'User not found'
         })
      }
      next();
      
   } catch (error) {
      res.status(401).clearCookie('jwt').json({
         message:'Not authorized, token failed/expired',
         error:error.message
      });
   }
}

export default auth_middleware;