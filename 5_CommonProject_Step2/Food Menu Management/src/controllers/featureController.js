import FoodMenu from "../models/foodMenu";

export const searchController=async(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:"error",
         message:"Server error",
         error:error.message
      })
   }
}