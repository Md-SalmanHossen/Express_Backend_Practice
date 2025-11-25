
import File from './../models/File.model.js';


export const fileUpload=async(req ,res)=>{
   try {

      if(!req.file){
         return res.status(400).json({
            status:'fail',
            message:'No file uploaded'
         });
      }

      const fileUrl=req.file.path;

      const fileDoc=await File.create({
         filename:fileUrl,
      });

      res.status(201).json({
         status:'success',
         message:'File uploads successfully',
         fileUrl,
         savedFile:fileDoc
      });

   } catch (error) {
      res.status(500).json({
         status:'fail',
         message:'Server error during file upload',
         error:error.message
      })
   } 
}
