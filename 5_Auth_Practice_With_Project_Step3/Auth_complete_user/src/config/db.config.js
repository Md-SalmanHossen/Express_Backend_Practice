import mongoose from "mongoose";

const connectDB=async()=>{
   try {
      const conn=await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connection: ',conn.connection.host);
      console.log('MongoDB connection: ',conn.connection.name);
   } catch (error) {
      console.log("MongoDB connecting error",error);
      process.exit(1);
   }
}

export default connectDB;