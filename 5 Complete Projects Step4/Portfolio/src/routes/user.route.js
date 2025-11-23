import express from "express";
import auth from './../middlewares/auth_middleware.js';
import *as user from '../controllers/user.controller.js';

const router=express.Router();


router.post('/signup',user.signup);
router.post('/verify-email',user.verifyEmail);

export default router;