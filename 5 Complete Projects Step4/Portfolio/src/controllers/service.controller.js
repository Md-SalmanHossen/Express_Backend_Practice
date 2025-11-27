import Service from '../models/Service.model.js';

export const createService=async(req ,res)=>{
   try {
      const service=await Service.create(req.body);

      res.status(201).json({
         status:'success',
         message:'Service created successfully',
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

      const services=await Service.find().populate('category','name','slug').sort({createdAt:-1});

      res.status(200).json({
         status:'success',
         total:Service.length,
         services
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during  get all service',
         error:error.message
      })
   }
}

export const updateService=async(req ,res)=>{
   try {
      const {id}=req.params;

      const updatedService=await Service.findByIdAndUpdate(
         id,
         req.body,
         {new:true, runValidators:true}
      )
      if(!updatedService){
         return res.status(404).json({
            status:'fail',
            message:'update Service not found'
         })
      }

      res.status(200).json({
         status:'success',
         message:'Service updated successfully',
         service:updatedService
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

