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
      const {title,price,description,features,category,imageUrl}=req.body;

      const service=await Service.findById(id);
      if(!service){
         return res.status(404).json({
            status:'fail',
            message:'Service not found'
         })
      }

      if(title !==undefined) service.title=title;
      if(price !==undefined) service.price=price;
      if(description!==undefined) service.description=description;
      if(features!==undefined) service.features=features;
      if(category!==undefined) service.category=category;
      if(imageUrl!==undefined) service.imageUrl=imageUrl;

      await service.save();

      res.status(200).json({
         status:'success',
         message:'Service updated successfully',
         service
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during update service',
         error:error.message
      })
   }
}

export const deleteService=async(req ,res)=>{
   try {
      const {id}=req.params;
      const deleted=await Service.findByIdAndDelete(id);
      if(!deleted){
         return res.status(404).json({
            status:'false',
            message:'Service not found'
         });
      }

      res.status(200).json({
         status:'success',
         message:'Service deleted successfully'
      })

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during delete service',
         error:error.message
      })
   }
}

