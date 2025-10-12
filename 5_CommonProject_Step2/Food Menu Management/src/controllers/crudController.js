import foodMenu from "../models/foodMenu.js";

export const createFoodMenu=async(req,res)=>{
   try {
      const newFood=await foodMenu.create(req.body);
      res.status(201).json({
         success:true,
         message:true,
         data:newFood
      })
   } catch (error) {
      res.status(500).json({
         success:false,
         message:"Failed to create item",
         error:error.message,
      })
   }
}

export const readAllFoodMenu=async(req,res)=>{
   try {
      const allFod=await foodMenu.find();
      res.status(201).json({
         success:true,
         message:true,
         data:allFod
      })
   } catch (error) {
      res.status(500).json({
         status:"Failed",
         message:"Failed to fetch food item",
         error:error.message,
      })
   }
}

export const readSingleFoodMenu=async(req,res)=>{
   try {
      const foodId=req.params.id;
      const singleFood=await foodMenu.findById(foodId);

      if(!singleFood){
         return res.status(404).json({
            status:"Not Found",
            message:"Food item not found"
         })
      }
      res.status(200).json({
         status:"Success",
         data:singleFood
      })

   } catch (error) {
      res.status(500).json({
         status:error,
         message:"Failed to fetch data",
         error:error.message
      })
   }
}

export const updateFoodMenu=async(req,res)=>{
   try {
      const {id}=req.params;
      const updateField=req.body;

      if(Object.keys(updateField).length===0){
         return res.status(400).json({
            message:"Update data is not valid"
         });
      }
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message,
      })
   }
}
