import express from 'express';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';


const app=express();


app.use(hpp());
app.use(helmet());
app.use(cookieParser());
const limiter=rateLimit({
   windowMs:60*60*1000,
   max:1000,
});
app.use(limiter);


export default app;