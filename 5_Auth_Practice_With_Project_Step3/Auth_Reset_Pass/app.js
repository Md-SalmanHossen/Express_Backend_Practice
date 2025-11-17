import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from 'express-rate-limit';
import hpp from "hpp";
import helmet from 'helmet'

import connectDB from "./src/configs/database.config.js";
import routeHandler from "./src/middlewares/route_handler.middleware.js";

const app=express();
dotenv.config();


app.use(cors());

app.use(helmet());
app.use(hpp());

app.use(cookieParser());

app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended:true}));

let limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);


connectDB();

app.use("/api",router);
app.use(routeHandler);


export default app;


















