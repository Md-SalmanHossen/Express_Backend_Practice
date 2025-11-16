import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './src/config/db.config.js';
import routeHandler from './src/middlewares/route_handler.middleware.js';

dotenv.config();
const app=express();


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();


app.use(routeHandler);


export default app;