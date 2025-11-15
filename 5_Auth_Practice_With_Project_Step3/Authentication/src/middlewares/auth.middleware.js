import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const auth_middleware=async(req ,res , next)=>{
   try {
      let token=req.cookies.token;

      if(!token){
         return res.status(401).json({
            message:'Not authorized,no token provided'
         })
      }

      const decoded=jwt.verify(token,process.env.JWT_SECRET);
      const userId=decoded.userId || decoded.id;
      const user=await User.findById(userId).select('-password');
      
      if(!user){
         return res.status(404).json({
            message:'User not found'
         })
      }
      req.user=user;
      next();
      
   } catch (error) {
      res.status(401).clearCookie('jwt').json({
         message:'Not authorized, token failed/expired',
         error:error.message
      });
   }
}

export default auth_middleware;