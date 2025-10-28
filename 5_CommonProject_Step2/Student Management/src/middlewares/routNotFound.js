
const routeNotFound=(req,res)=>{
   try {
      res.status(404).json({
         status:"Not Found",
         message:"Route not Found in server"
      })
   } catch (error) {
      
   }
}