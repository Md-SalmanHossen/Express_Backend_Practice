
const routeNotFound=(req,res,next)=>{
   try {
      res.status(404).json({
         status:"Not found",
         message:"Server not found"
      })
   } catch (error) {
      res.status(500).json({
         status:"Error",
         message:"Server error",
         error:error.message,
      })
   }
}