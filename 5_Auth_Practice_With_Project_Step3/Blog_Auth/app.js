import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectDB from './src/config/db.config.js';
import router from './src/routes/routes.js';

dotenv.config();
const app=express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB(); 

app.use('/api/v1/portfolio',router)

export default app;