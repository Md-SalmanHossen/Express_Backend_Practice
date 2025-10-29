import express from 'express';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import router from './src/routes/studentManagementApi.js';
import routeNotFound from './src/middlewares/routNotFound.js'
const app=express();

app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
const limiter=rateLimit({
   windowMs:60*60*1000,
   max:1000,
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('student/api/',router);


export default app;