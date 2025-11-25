
import File from './../models/File.model.js';


export const fileUpload=async(req ,res)=>{
   try {

      const {filename}=req.file;
      const data=await File.create({filename});

      res.status(201).json({
         status:'success',
         message:'File uploads successfully',
         data,
      });
      
   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during file upload',
         error:error.message
      })
   } 
}
