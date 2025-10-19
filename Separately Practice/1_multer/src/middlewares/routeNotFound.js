
const routeNotFound=(req,res,next)=>{
   try {
      res.status(404).json({
         status:"Not found",
         message:"Server not found"
      })
   } catch (error) {
      
   }
}