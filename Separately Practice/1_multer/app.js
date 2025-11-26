import express  from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from  'express-rate-limit';

import router from './src/routes/api.js'
import routeNotFound from './src/middlewares/routeNotFound.js';
import connectDB from './src/config/database.config.js';

const app=express();

app.use(hpp());
app.use(helmet());
app.use(cookieParser());
const rateLimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000,
})
app.use(rateLimiter);


app.use(express.json());
app.use(express.urlencoded({extended:true}));


connectDB();

app.use(router);
app.use(routeNotFound);

export default app;