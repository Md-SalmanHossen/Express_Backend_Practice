
import books from "../database/db.js";

export const searchBook=(req,res)=>{
   try {
      const {searchQuery}=req.query;
      if(!searchQuery || searchQuery===''){
         return res.status(400).json({
            status:"Failed",
            message:"Search query is required"
         })
      }
      const searchTerm=searchQuery.toLowerCase();

      const results=books.filter((item)=>{
         return(
            item.author.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
         );
      });

      return res.status(200).json({
         status:"Success",
         message:"Book found successfully",
         count:results.length,
         data:results
      });

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export const sortBooks=(req,res)=>{
   try {
      // sorting by low-high or high-low price,a-z

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
export const filterBooks=(req,res)=>{
   try {
      // filter by range and category
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
export const paginateBook=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
export const getTopRateBooks=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
export const recommendationBooks=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
