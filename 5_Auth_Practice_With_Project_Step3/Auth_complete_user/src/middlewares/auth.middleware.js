import jwt from 'jsonwebtoken'

const authMiddleware=(req ,res , next)=>{
   try {

      const token=req.headers.authorization?.split(' ')[1];
      if(!token){
         return res.status(404).json({
            message:'Token missing'
         });
      }
      const decoded=jwt.verify(token,process.env.JWT_SECRET);
      req.user=decoded.userId;

      next();
   } catch (error) {
      res.status(500).json({
         message:'Invalid token',
         error:error.message
      })
   }
}
export default authMiddleware;