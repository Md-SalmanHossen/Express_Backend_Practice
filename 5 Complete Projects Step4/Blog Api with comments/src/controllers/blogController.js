
import blog from '../models/blog.js'

export const createBlog=async(req,res)=>{
   try {
      const {title,content}=req.body;
      const newBlog=await blog.create({
         title,
         content,
         author:req.user,
      })
      res.status(201).json({
         message:"Create successfully",
         newBlog
      })
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}

export const getBlog=async(req,res)=>{
   try {
      const blogs=await blog.find().populate('author','name email');
      res.status(200).json(blogs);
   } catch (error) {
      res.status(500).json({
         message:"Internal error",
         error:error.message
      })
   }
}