import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet';
import notFound from './src/middlewares/notFound.js';
import router from './src/routes/restaurantApi.js';

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

app.use('/restaurant/api/',router)
app.use(notFound);

export default app;