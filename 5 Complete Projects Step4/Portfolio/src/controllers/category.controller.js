import Category from './../models/Category.model.js';

export const createCategories=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during',
         error:error.message
      })
   }
}

export const readCategories=async(req ,res)=>{
   try {

      const categories=await Category.find().sort({createdAt:-1});
      if(!categories){
         return res.status(400).json({
            status:'fail',
            message:''
         })
      };

      res.status(200).json({
         status:'success',
         total:categories.length,
         categories
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during  get all categories',
         error:error.message
      })
   }
}

export const updateCategories=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during',
         error:error.message
      })
   }
}

export const deleteCategories=async(req ,res)=>{
   try {

      const deleted=await Category.findByIdAndDelete(id);
      if(!deleted){
         return res.status(404).json({
            status:'false',
            message:'Category not found'
         });
      }

      res.status(200).json({
         status:'success',
         message:'Category deleted successfully'
      })
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during',
         error:error.message
      })
   }
}

