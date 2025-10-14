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

      const searchRegex=new RegExp(searchQuery,'i');

      const results=await FoodMenu.find({
         $or:[
            {name:{$regex:searchRegex}},
            {description:{$regex:searchRegex}}
         ]
      });

      res.status(200).json({
         status:"Success",
         results_count:results.length,
         data:results
      })

   } catch (error) {
      res.status(500).json({
         status:"error",
         message:"Server error",
         error:error.message
      })
   }
}