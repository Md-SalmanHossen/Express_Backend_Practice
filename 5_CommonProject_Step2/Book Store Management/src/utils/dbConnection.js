import mongoose from "mongoose";

const connectURI=process.env.MONGO_URI_LOCAL;
const connectDB=async()=>{
   try {
      const conn=await mongoose.connect(connectURI);
      console.log(`MongoDb connected : ${conn.connection.host}`);
   } catch (error) {
      console.error(`Error connecting to MongoDB Local : ${error.message}`)
   }
}
export default connectDB;