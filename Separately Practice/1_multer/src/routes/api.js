
import express from 'express';
import Image from "../models/image.model.js";
import upload from "../middlewares/multer.middleware.js";

const router=express.Router();

router.post("/upload-image", upload.single("image"), async(req,res)=>{
  try{
    const saveImg = await Image.create({
      url: req.file.path,
      public_id: req.file.filename,
    });

    res.json({
      success:true,
      message:"Uploaded & Saved in DB",
      data: saveImg
    });
  }catch(error){
    res.status(500).json({error:error.message});
  }
});

export default router;