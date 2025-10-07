
const routeNotFound=(req,res,next)=>{
   return res.status(404).json({
      status:"failed",
      message:"Route not found on this server"
   })
}

export default routeNotFound;