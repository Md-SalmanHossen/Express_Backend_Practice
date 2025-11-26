import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ⬅ options আর দরকার নেই
    console.log("📦 MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
