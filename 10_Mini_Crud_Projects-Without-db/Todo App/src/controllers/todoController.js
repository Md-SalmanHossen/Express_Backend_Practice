
let todos=[];
let idIncrease=1000;


export const createToDo=(req,res)=>{
   try {

      const {title,description}=req.body;

      if(!title) return res.status(400).json({
         message:"title not require"
      })

      const newToDo={
         id:idIncrease+5,
         title,
         ...(description && {description}),// truthy modern syntax for optional chaining
         complete:false,
         createdAt:new Date().toISOString()
      }

   

      todos.push(newToDo);
      return res.status(201).json({
         message:"Todo Create Successfully",
         todo:newToDo
      })

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const readAll=(req,res)=>{
      try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const readById=(req,res)=>{
      try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const updateToDo=(req,res)=>{
      try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const updateById=(req,res)=>{
      try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const deleteToDo=(req,res)=>{
      try {
      
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}


