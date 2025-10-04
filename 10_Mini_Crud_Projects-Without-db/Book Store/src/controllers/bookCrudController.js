
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
         total:books.length,
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
      const {id}=req.params;
      const bookIndex=books.findIndex((item)=>item.id===id);
      if(bookIndex===-1){
         return res.status(404).json({
            message:"Book not found"
         })
      }
      const deleted=books.splice(bookIndex,1)[0];
      return res.status(200).json({
         message:"Deleted Information successfully",
         deleted_book:deleted
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const DeleteAllBook=(req,res)=>{
   try {

      if(books.length===0){
         return res.status(404).json({
            message:"book not found to delete"
         })
      }
      const deletedAllBooks=[...books];
      books.length=0;

      return res.status(200).json({
         message:"All books deleted successfully",
         deleted_count:deletedAllBooks.length,
         deleted_books:deletedAllBooks
      })

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}

