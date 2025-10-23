import express from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
const app=express();


app.use(hpp());
//app.use(helmet());


export default app;