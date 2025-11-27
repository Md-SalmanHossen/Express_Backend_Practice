import Category from './../models/Category.model.js';

export const listCategories=async(req ,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during  get all categories',
         error:error.message
      })
   }
}
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
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during',
         error:error.message
      })
   }
}

