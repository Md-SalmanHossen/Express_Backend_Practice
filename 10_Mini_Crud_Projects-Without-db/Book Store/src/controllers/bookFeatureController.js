
import db from "../database/db.js"

export const searchBook=(req,res)=>{
   try {
      //search by id,title,author,price
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
