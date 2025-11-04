
export const createBlog=async(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message,
      })
   }
}