import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectURI = process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
   console.log("Connecting to MongoDB URI:", connectURI);
   try {
      const conn = await mongoose.connect(connectURI);
      console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1);
   }
}

export default connectDB;
