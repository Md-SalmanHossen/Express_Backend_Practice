const notFound=(req,res,next)=>{
   try {
      return res.status(404).json({
         status:"Failed",
         message:"Route not found on this server",
      })
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message,
      })
   }
}
export default notFound;