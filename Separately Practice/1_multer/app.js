import express  from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from  'express-rate-limit';

import router from './src/routes/api.js'
import routeNotFound from './src/middlewares/routeNotFound.js';
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routeNotFound);

export default app;