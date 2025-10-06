
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
      const { sortBy,order='asc'}=req.query;

      if(!sortBy || !['price','title'].includes(sortBy)){
         return res.status(400).json({
            status:"Invalid",
            message:"Invalid 'sortBy' parameter.Use 'price' or 'title'"
         })
      }

      if(!['asc','desc'].includes(order)){
         return res.status(400).json({
            message:"Invalid",
            message:"Invalid 'order' parameter. Use asc or desc"
         });
      }

      let sortedBooks=[...books];

      if(sortBy==='price'){
         sortedBooks.sort((a,b)=>{
            order==='desc'?
            b.price-a.price 
            :a.price-b.price
         })
      }else if(sortBy==='title'){
         sortedBooks.sort((a,b)=>{
            order==='desc'? 
            b.title.localeCompare(a.title)
            :a.title.localeCompare(b.title)
         })
      }
      return res.status(200).json({
         status:"Successfully",
         message:`Books sorted by ${sortBy} in ${order}`,
         total_book:books.length,
         data:sortedBooks
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export const filterBooks=(req,res)=>{
   try {
      
      const {minPrice,maxPrice,category}=req.query;
      let filteredBook=[...books];

      if(minPrice || maxPrice){
         const min=parseFloat(minPrice) ||0;
         const max=parseFloat(maxPrice) || Infinity;

         filteredBook=filteredBook.filter(item=>item.price>=min && item.price<=max)
      }

      if(category){
         filteredBook=filteredBook.filter(item=>item.category.toLowerCase()===category.trim().toLowerCase())
      }

      if(filteredBook.length===0){
         return res.status(404).json({
            status:"Not Found",
            message:'No Books found matching your filters'
         })
      }

      return res.status(200).json({
         status:"Success",
         message:'Books filtered successfully',
         total:filteredBook.length,
         data:filteredBook
      })

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export const paginateBook=(req,res)=>{
   try {

      const {page=1,limit=5}=req.query;
      const parsedPage=parseInt(page);
      const parsedLimit=parseInt(limit);

      if(isNaN(parsedPage) || parsedPage<1) parsedPage=1;
      if(isNaN(parsedLimit)||parsedLimit<1) parsedLimit =5;

      const startIndex=(parsedPage-1)*parsedLimit;
      const endIndex=startIndex+parsedLimit;

      const paginatedBooks=books.slice(startIndex,endIndex);

      if(paginatedBooks.length===0){
         return res.status(404).json({
            status:"Not Found",
            message:"No books found for this page"
         })
      }

      return res.status(200).json({
         status:"Success",
         page:parsedPage,
         limit:parsedLimit,
         total_book:books.length,
         total_pages:Math.ceil(books.length/parsedLimit),
         data:paginatedBooks
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export const getTopRateBooks=(req,res)=>{
   try {

      const {limit=5}=req.query;
      const parsedLimit =parseInt(limit);

      if(isNaN(parsedLimit) || parsedLimit<1){
         return res.status(400).json({
            status: "Invalid",
            message: "'limit' must be a greater than 0",
         });
      }
      if(parsedLimit<1)parsedLimit=1;
      if(parsedLimit>50) parsedLimit=50;
      let topRated=[...books];
      topRated=topRated
      .sort((a,b)=>b.rating-a.rating)
      .slice(0,parsedLimit);

      if(topRated.length==0){
         return res.status(404).json({
            status:"Not found",
            message:"No books Found"
         });
      };

      return res.status(200).json({
         status:"Success",
         limit:parsedLimit,
         data:topRated
      })

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}

export const recommendationBooks=(req,res)=>{
   try {
      const recommended=books.filter(item=>item.isFeatured===true)
      .sort((a,b)=>b.rating-a.rating);

      res.status(200).json({
         status:'Success',
         message:recommended.length>0?"Recommended books found" :"No recommended books available",
         count:recommended.length,
         books:recommended
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message,
      })
   }
}
