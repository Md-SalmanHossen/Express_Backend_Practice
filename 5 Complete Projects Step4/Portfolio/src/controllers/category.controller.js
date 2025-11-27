import Category from './../models/Category.model.js';
import User from '../models/User.model.js'

export const createCategories=async(req ,res)=>{
   try {
      const {name,slug,description}=req.body;

      if(!name || !slug){
         return res.status(400).json({
            status:'false',
            message:'Name and slug fields are required'
         });
      }

      const existed=await Category.findOne({$or:[{name},{slug}]});
      if(existed){
         return res.status(400).json({
            status:'false',
            message:'Name or slug already exists'
         })
      }

      const category=await Category.create({
         name,
         slug,
         description
      });

      res.status(201).json({
         status:'success',
         message:'Category created successfully',
         category
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during crete category',
         error:error.message
      })
   }
}

export const readCategories=async(req ,res)=>{
   try {

      const categories=await Category.find().sort({createdAt:-1});

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
      const {id}=req.params;
      const {name,slug,description}=req.body;

      const category=await User.findById(id);
      if(!category){
         return res.status(404).json({
            status:'fail',
            message:'Category not found'
         })
      }

      if(name !==undefined) category.name=name;
      if(slug !==undefined) category.slug=slug;
      if(description!==undefined) category.description=description;

      await category.save();

      res.status(200).json({
         status:'success',
         message:'Category updated successfully',
         category
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during update category',
         error:error.message
      })
   }
}

export const deleteCategories=async(req ,res)=>{
   try {
      const {id}=req.params;
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
         message:'Server error during delete category',
         error:error.message
      })
   }
}

