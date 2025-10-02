
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
      return res.status(200).json({
         count:todos.length,
         todos
      })   
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}
export const readById=(req,res)=>{
   try {
      const {id}=req.params;
      const todoId=parseInt(id);
      const todo=todos.find((profile)=>profile.id===todoId);
      
      if(!todo) return res.status(404).json({
         message:"Todo list not found"
      }) 

      return res.status(200).json({
         message:"Todo retrieved successfully",
         todo
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
}

export const updateToDo=(req,res)=>{
   try {

      const {id}=req.params; 
      const todoId=parseInt(id);

      if(isNaN(todoId)) return res.status(400).json({
         message:"Invalid Todo Id"
      }) 

      const todoIndex=todos.findIndex((item)=>item.id===todoId);
      if(todoIndex==-1) return res.status(404).json({
         message:`Todo with id ${id} not found`
      });

      const {title,description,complete}=req.body;
      if(! title|| complete===undefined){
         return res.status(400).json({
            message:"Title and complete required"
         });
      }
      const existingTodo=todos[todoIndex];
      const updateTodo={
         ...existingTodo,
         title,
         description:description || existingTodo.description,
         updatedAt:new Date().toISOString()
      }
      todos.push(updateTodo);

      return res.status(200).json({
         message:"Todo fully updated",
         todo:updateTodo
      })

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


