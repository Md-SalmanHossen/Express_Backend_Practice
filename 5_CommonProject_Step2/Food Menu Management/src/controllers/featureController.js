import FoodMenu from "../models/foodMenu.js";

export const searchController=async(req,res)=>{
   try {
      const {searchQuery}=req.query;
      if(!searchQuery){
         return res.status(404).json({
            status:"Not Found",
            message:"Server not found"
         })
      }

      
   } catch (error) {
      res.status(500).json({
         status:"error",
         message:"Server error",
         error:error.message
      })
   }
}