import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

import notFound from './src/middlewares/notFound.js';
import router from './src/routes/foodMenuApi.js'

const app=express();

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
const rateLimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000
});
app.use(rateLimiter);


app.use(express.json());
app.use(express.urlencoded({extended:true}))

//app.use(mongoSanitize());


app.use('/api/foodMenu',router);
app.use(notFound);

export default app;