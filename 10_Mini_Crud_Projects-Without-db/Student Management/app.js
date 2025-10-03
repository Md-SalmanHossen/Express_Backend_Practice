
import express  from 'express';
import cookieParser from 'cookie-parser';
import cors from  'cors';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import helmet from 'helmet';

import notFound from './src/middleware/notFound';


const app=express();

//security middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
const rateLimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000
})
app.use(rateLimiter);


//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//root api
app.get('/api/',()=>{
   try {
      res.status(200).json({
         message:"welcome to home page"
      });
   }catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
});
//routing api
//app.use('/api/student/');

app.use(notFound)


export default app;
