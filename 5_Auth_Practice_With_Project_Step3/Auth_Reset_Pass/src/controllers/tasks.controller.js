import TasksModel from './../models/Tasks.Model.js';

export const createTask=async (req,res)=>{
   try{
       
   }catch (error) {
       res.json({
        status:"fail",
        message:'Server error occur during create tasks',
        error:error.message
     })
   }
}

export const readTask=async (req,res)=>{
    try{
        

    }catch (error) {
        res.json({
         status:"fail",
         message:'Server error occur during',
         error:error.message
      })
    }
}

export const updateTask=async (req,res)=>{
    try{
        

    }catch (error) {
        res.json({
         status:"fail",
         message:'Server error occur during',
         error:error.message
      })
    }
}

export const deleteTask=async (req,res)=>{
    try{
        

    }catch (error) {
        res.json({
         status:"fail",
         message:'Server error occur during',
         error:error.message
      })
    }
}

