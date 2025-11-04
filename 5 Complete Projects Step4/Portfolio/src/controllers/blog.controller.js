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

export const getAllBlog=async(req,res)=>{
   try{
      const facetStage={
         $facet:{
            totalCOunt:[{$count:"count"}],
            blogs:[
               {$sort: {createdAt: -1}},
               {
                  $project:{
                     title:1,
                     img:1,
                     category:1,
                     description:1,
                     short_description:1,
                  }
               } 
            ]
         }
      }; 
      const getAll=await Blog.aggregate(facetStage) ;
       
      res.status(200).json({
         success:true,
         message:"Fetched data all successfully",
         error:error.message,
         total_blog:getAll.length,
         data:getAll
      });
      
   }catch(error){
      res.status(500).json({
         success:false,
         message:"Fetched to failed and occur error",
         error:error.message
      })
   }
}