
import routeNotFound from './src/middleware/notFound.js';
import router from './src/routes/todoRoutes.js'

import express from 'express'
import hpp from 'hpp';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app=express();

//Security middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
const rateLimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000,
   standardHeaders:true,
   legacyHeaders:false
});
app.use(rateLimiter);

//Body Parser 
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//root api
app.get('/',(req,res)=>{
   res.status(200).json({
      message:"welcome to home"
   })
})
app.use('/api/todos',router);

//Invalid Route Handling
app.use(routeNotFound);

export default app;