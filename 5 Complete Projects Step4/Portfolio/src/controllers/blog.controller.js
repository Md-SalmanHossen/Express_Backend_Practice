import Blog from '../models/userModel.js';

export const createBlog=async(req,res)=>{
   try {

      const {title,img,category,description,short_description}=req.body;
      const createBlog=await Blog.create({
         title,
         img,
         category,
         description,
         short_description
      })

      res.status(201).json({
         success:true,
         message:"Blog created successfully",
         data:createBlog
      });
      
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message,
      })
   }
}