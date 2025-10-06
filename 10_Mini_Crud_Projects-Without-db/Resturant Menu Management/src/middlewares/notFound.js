
const notFound=(req,res,next)=>{
   try {
      return res.status(404).json({
         status:"Not Found",
         message:"Route not found on this server"
      })
   } catch (error) {
      return res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}