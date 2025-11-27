import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from 'express-rate-limit';
import hpp from "hpp";
import helmet from 'helmet'

import connectDB from "./src/config/database.config.js";
import user_router from "./src/routes/user.route.js";
import category_route from './src/routes/category.route.js'

import routeHandler from "./src/middlewares/route_handler.middleware.js";


dotenv.config();


const app=express();

app.use(cors());

app.use(helmet());
app.use(hpp());

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended:true}));

let limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

connectDB();

app.use('/portfolio/v1/api',user_router);
app.use('/portfolio/v1/api/category',category_route);

app.use(routeHandler);


export default app;


















