import FoodMenu from "../models/foodMenu.js";

export const searchController=async(req,res)=>{
   try {
      const {searchQuery}=req.query;
      if(!searchQuery){
         return res.status(400).json({
            status:"Failed",
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
         search_keyword:searchQuery,
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
      let sortObject={price:1};

      if(sort){
         let [field,order]=sort.split('_');
         const allowFields=['price','name','category'];
         
         let sortOrder;
         if(order && order.toLowerCase()==='desc')sortOrder=-1;
         else sortOrder=1;

         if(allowFields.includes(field)){
            sortObject={};
            sortObject[field]=sortOrder;
         }else console.warn(`Invalid sort field: ${field}.Using By default sort by price`)

         const result=await FoodMenu.find().sort(sortObject);

         res.status(200).json({
            status:"Success",
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

export const filterController=async(req,res)=>{
   try {
      const {category,minPrice,maxPrice}=req.query;
      let filterObject={};

      if(category) filterObject.category=category;

      if(minPrice || maxPrice){
         filterObject.price={};
         if(minPrice) filterObject.price.$gte=Number(minPrice);
         if(maxPrice) filterObject.price.$lte=Number(maxPrice);
      }

      const result=await FoodMenu.find(filterObject);

      res.status(200).json({
         status:"Success",
         total_results:result.length,
         applied_filters:filterObject,
         data:result
      })
   } catch (error) {
      
   }
}