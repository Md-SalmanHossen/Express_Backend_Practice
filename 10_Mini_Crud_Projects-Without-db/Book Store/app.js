
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import helmet from 'helmet';

import notFound from './src/middleware/notFound.js';
import router from './src/routes/bookStoreApi.js';

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
app.use(express.urlencoded({
   extended:true
}));

app.use('/api/bookstore/',router);

//route handling
app.use(notFound);



export default app;
