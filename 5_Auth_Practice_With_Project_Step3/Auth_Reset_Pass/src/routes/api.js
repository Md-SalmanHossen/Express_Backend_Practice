import express from "express";
import *as user from '../controllers/user.controller.js'
const router=express.Router();

router.post('/signup',user.signup);


export default router;