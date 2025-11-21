import express from "express";

import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";
import routeNotFound from './src/middleware/routeNotFound.js'
import api from './src/routes/api.js'
 
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users/',api);
app.use(routeNotFound);

export default app;