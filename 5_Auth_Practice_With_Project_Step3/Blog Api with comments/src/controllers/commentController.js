import comment from "../models/comment.js";

export const addComment=async(req ,res)=>{
   try {
      const {commentText,blogId}=req.body;

      const addComment=await comment.create({
         commentText,
         blog:blogId,
         user:req.user
      })

      res.status(200).json({
         message:"Comment add successfully",
         addComment
      })

   } catch (error) {
      res.status(200).json({
         message:"Server error",
         error:error.message
      })
   }
}


export const getBlogWithComments=async(req , res)=>{
   try {
      
      const {blogId}=req.params;
      const comments=await comment.find({blog:blogId}).populate('user','name');

      res.status(200).json({
         message:"comments successfully",
         comments
      })

   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}
