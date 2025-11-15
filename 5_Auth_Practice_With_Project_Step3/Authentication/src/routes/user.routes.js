import express from 'express';
import *as user from '../controllers/user.controller.js'
import auth_middleware from './../middlewares/auth.middleware.js';


const router=express.Router();

router.post('/signup',user.signup);
router.post('/login',user.login);

router.get('/profile',auth_middleware,user.getProfile);



export default router;