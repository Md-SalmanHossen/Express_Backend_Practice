
import books from "../database/db.js"

export const createBook=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const readSingleBook=(req,res)=>{
   try {
      const {id}=req.params;
      const book=books.find((item)=>item.id===id);
      if(!book){
         return res.status(404).json({
            message:`Book with id : ${id} not found`
         })
      }
      return res.status(200).json({
         message:"Fetched successfully",
         book_details:book
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const readAllBook=(req,res)=>{
   try {
      res.status(200).json({
         message:"Fetched student successfully",
         details:books
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const updateBook=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const updateBookPartially=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const deleteSingleBook=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const DeleteAllBook=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}

