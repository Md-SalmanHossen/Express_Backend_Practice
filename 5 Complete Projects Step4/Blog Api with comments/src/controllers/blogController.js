
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
      
   }
}

export const getBlog=async(req,res)=>{
   try {
      
   } catch (error) {
      
   }
}