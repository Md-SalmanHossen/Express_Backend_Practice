import FoodMenu from "../models/foodMenu.js";

export const searchController=async(req,res)=>{
   try {
      const {searchQuery}=req.query;
      if(!searchQuery){
         return res.status(400).json({
            status:"Not Found",
            message:"Please provide a 'searchQuery' in the URL parameter (e.g.,?searchQuery==burger)"
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

export const sortController=async(req,res)=>{
   try {

      const {sort}=req.query;
      const sortObject={name:1}

      if(sort){
         const [field,order]=sort.split('_');
         const allowFields=['price','name','category'];
         
         let mongoOrder;
         if(order && order.toLowerCase()==='desc')mongoOrder=-1;
         else mongoOrder=1;

         if(allowFields.includes(field)){
            sortObject={};
            sortObject[field]=mongoOrder;
         }else console.warn(`Invalid sort field provided: ${field}.Using Default sort`)

         const result=await FoodMenu.find().sort(sortObject);

         res.status(200).json({
            status:"Success",
            sort_criteria:sortObject,
            result_count:result.length,
            data:result
         })
      }

      

   } catch (error) {
      res.status(500).json({
         status:"error",
         message:"Server internal error",
         error:error.message
      })
   }
}