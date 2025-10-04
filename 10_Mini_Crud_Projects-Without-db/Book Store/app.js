
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import helmet from 'helmet';

const app=express();

//security middleware
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
const ratelimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000,
   standardHeaders:true,
});
app.use(ratelimiter);

//body parser 
app.use(express.json());
app.use(express.urlencoded({extended:true}));



export default app;
