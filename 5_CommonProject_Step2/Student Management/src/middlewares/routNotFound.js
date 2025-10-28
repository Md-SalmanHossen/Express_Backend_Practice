
const routeNotFound=(req,res)=>{
   try {
      res.status(404).json({
         status:"Not Found",
         message:"Route not Found in server"
      })
   } catch (error) {
      res.status(500).json({
         status:"Internal error",
         message:"Server internal error occur",
         error:error.message,
      })
   }
}
export default routeNotFound;