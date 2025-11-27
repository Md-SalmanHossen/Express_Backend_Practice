import Service from '../models/Service.model.js';

export const createService=async(req ,res)=>{
   try {
      const {title,description,price,features,imageUrl,category}=req.body;

      if(!title || !description || !category){
         return res.status(400).json({
            status:'false',
            message:'Title, description, and category fields are required'
         });
      }

      const service=await Service.create({
         title,
         description,
         price,
         features,
         imageUrl,
         category
      });

      res.status(201).json({
         status:'success',
         message:'Category created successfully',
         data:service
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during crete service',
         error:error.message
      })
   }
}

export const listAllService=async(req ,res)=>{
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

export const updateService=async(req ,res)=>{
   try {
      const {id}=req.params;
      const {name,slug,description}=req.body;

      const category=await Category.findById(id);
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

export const deleteService=async(req ,res)=>{
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

