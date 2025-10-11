import dotenv from 'dotenv';
dotenv.config();
import app from "./app.js";
import connectDB from "./src/utils/dbConnection.js";



connectDB();

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
});
