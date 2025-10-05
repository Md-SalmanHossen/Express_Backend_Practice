

import books from "../database/db.js"
let id="25";

export const createBook=(req,res)=>{
   try {
      const {title,author,category,price,description,publishedYear,isFeatured,stock,rating}=req.body;

      if(!title || !author || !price || !category){
         return res.status(400).json({
            status:"Information Missing",
            message:"Title,author,category,price are required"
         });
      };

      if(typeof title !=='string' || title.trim()===''){
         return res.status(400).json({
            message:"Title is require and must be not empty string"
         })
      };

      if(typeof author !=='string' || author.trim()===''){
         return res.status(400).json({
            message:"Author is require and must be not empty string"
         });
      }

      if(typeof category !=='string' || category.trim()===''){
         return res.status(400).json({
            message:"Category is require and must be not empty string"
         });
      }

      if(typeof price !=='number' || price<0){
         return res.status(400).json({
            message:"Price is require and must be positive number"
         });
      }

      if(stock !==undefined && (typeof stock !=="number" || stock<0) || !Number.isInteger(stock)){
         return res.status(400).json({
            message:"Stock must be positive number"
         });
      }

      if(rating !== undefined && (typeof rating !=='number' || rating>5 || rating<0)){
         return res.status(400).json({
            message:"Rating must be positive number and 0 to 5"
         });
      }

      if(publishedYear !==undefined && (typeof publishedYear !=='number' || !Number.isInteger(publishedYear) || publishedYear<1000)){
         return res.status(400).json({
            message:"Published year must be positive an integer"
         });
      }
      
      if(isFeatured !==undefined && typeof isFeatured !=='boolean'){
         return res.status(400).json({
            message:"isFeatured must be Boolean.(true or false)"
         });
      }

      const newBook={
         id:++id,
         title,
         author,
         category,
         price,
         description:(description &&(description)),
         publishedYear:publishedYear || null,
         isFeatured: isFeatured || false,
         stock:stock || 0,
         rating:rating || 0,
      }
      books.push(newBook);
      return res.status(201).json({
         status:'Create',
         message:"Book Create Successfully",
         book_details:newBook,
      })

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

