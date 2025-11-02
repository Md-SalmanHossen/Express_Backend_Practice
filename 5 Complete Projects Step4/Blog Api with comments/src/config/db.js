
import mongoose from "mongoose";
 
const connectDB=async ()=>{
   try {
      mongoose.connect(process.env.MONG_URI);
      
   } catch (error) {
      console.log('MongoDB Error: ',error);
      process.exit(1);
   }
}