import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/connectDB.config.js';

const app=express();
dotenv.config();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();


export default app;