
import mongoose from "mongoose";

const connectDB=async ()=>{
   try {
      const connect=await mongoose.connect(process.env.MONG_URI);
      console.log(`MongoDB Connection: ${connect.connection.host}`)
   } catch (error) {
      console.log('MongoDB Error: ',error);
      process.exit(1);
   }
}

export default connectDB;