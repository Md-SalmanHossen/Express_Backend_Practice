import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './src/config/connectDB.config.js';
import routeHandler from './src/middlewares/route_handler.middleware.js';
import router from './src/routes/user.routes.js';

const app=express();
dotenv.config();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use('/auth/api/v1',router);

app.use(routeHandler);


export default app;