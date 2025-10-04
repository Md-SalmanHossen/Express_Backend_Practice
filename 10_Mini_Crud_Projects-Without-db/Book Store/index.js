import app from "./app.js";
import dotenv from  'dotenv'
dotenv.config();

const PORT=process.env.PORT;

//routing api
app.get('/',(req,res)=>{
   res.status(200).json({
      page:"Home page",
      message:"You are welcome"
   })
})
;
app.listen(PORT,()=>{
   console.log(`Server running on port http//:localhost:${PORT}`);
})