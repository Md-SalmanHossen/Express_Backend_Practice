import UsersModel from './../models/Users.Model';

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
