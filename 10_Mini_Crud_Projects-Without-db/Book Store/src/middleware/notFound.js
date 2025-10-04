
const notFound=(req,res,next)=>{
   try {
      return res.status(404).json({
         status:"failed",
         message:"Route not found on this server"
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export default notFound;

