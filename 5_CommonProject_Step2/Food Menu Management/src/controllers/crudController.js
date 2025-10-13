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
         status:"Failed",
         message:"Failed to fetch food item",
         error:error.message,
      })
   }
}

export const readSingleFoodMenu=async(req,res)=>{
   try {
      const foodId=req.params.id;
      const singleFood=await FoodMenu.findById(foodId);

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

      const updateItem= await FoodMenu.findByIdAndUpdate(
         id,
         {$set:updateField},
         {new:true,runValidators:true}
      );

      if(!updateItem){
         return res.status(404).json({
            status:"Not Found",
            message:"Menu item not found"
         })
      };
      res.status(200).json({
         status:"Success",
         message:"Updated Successfully",
         data:updateItem
      });

   } catch (error) {
      if(error.name==='CastError'){
         return res.status(400).json({
            message:"Invalid id formate wrong",
            error:error.message
         })
      }
      if(error.name==='ValidationError'){
         return res.status(400).json({
            message:"Invalid data provided",
            error:error.message
         })
      }
      res.status(500).json({
         message:"Server error",
         error:error.message,
      })
   }
}

export const deleteSingleMenu=async(req,res)=>{
   try {
      const {id}=req.params;
      const deleteMenu=await FoodMenu.findByIdAndDelete(id); 

      if(!deleteMenu){
         return res.status(404).json({
            status:"Not Found",
            message:"Menu not found"
         })
      }

      res.status(200).json({
         status:"Success",
         message:"User deleted",
         deleted_data:deleteMenu
      });

   } catch (error) {
      res.status(500).json({
         status:"Failed",
         message:"Server error",
         error:error.message
      })
   }
}

export const deleteAllMenu=async(req,res)=>{
   try {
      const deleteAllMenu=await FoodMenu.deleteMany();
      if(!deleteAllMenu){
         return res.status(404).json({
            status:"Not found",
            message:"Empty database"
         })
      }

      res.status(200).json({
         status:"Success",
         message:"All data deleted",
         delete_count:deleteAllMenu.length,
         deleted_data:deleteAllMenu
      })

   } catch (error) {
      res.status(500).json({
         status:"Error",
         message:"Server error",
         error:error.message
      })
   }
}