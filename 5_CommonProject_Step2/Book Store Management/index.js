import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./src/utils/dbConnection.js";

dotenv.config();
connectDB();

const PORT=process.env.PORT || 5555;

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
});
