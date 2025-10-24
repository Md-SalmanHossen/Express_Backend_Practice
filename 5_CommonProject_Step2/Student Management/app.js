import express from 'express';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';


const app=express();


app.use(hpp());
app.use(helmet());
app.use(cookieParser());


export default app;