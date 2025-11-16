import express from "express";
import dotenv  from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

import connectDB from "./src/config/dbConnect.js";
import routeNotFound from "./src/middlewares/routeNotFound.js";

dotenv.config();
const app=express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use(routeNotFound);

export default app;