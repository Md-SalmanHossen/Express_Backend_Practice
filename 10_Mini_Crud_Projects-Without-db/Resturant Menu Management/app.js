import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet';

const app=express();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());
const limiter=rateLimit({
   windowMs:15*60*1000,
   max:1000,
   standardHeaders:true
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({
   extended:true
}))

export default app;