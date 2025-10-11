import FoodMenu from "../models/foodMenu.js";

export const createFoodMenu=async(req,res)=>{
   try {
      const newFood=await FoodMenu.create(req.body);
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
      const allFod=await FoodMenu.find();
      res.status(201).json({
         success:true,
         message:true,
         data:allFod
      })
   } catch (error) {
      res.status(500).json({
         success:false,
         message:"Failed to fetch food item",
         error:error.message,
      })
   }
}

