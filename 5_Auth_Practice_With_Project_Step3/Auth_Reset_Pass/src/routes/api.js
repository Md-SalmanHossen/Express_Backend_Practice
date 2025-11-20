import express from "express";
import *as user from '../controllers/user.controller.js'
import auth from '../middlewares/auth.middleware.js'

const router=express.Router();

router.post('/signup',user.signup);
router.post('/login',user.login);

router.post('/verify-email',user.sendOTP);
router.post('/verify-otp',user.verifyOTP);

router.get('/profile',auth, user.profileDetails);
router.put('/profile',auth, user.ProfileUpdate);
router.delete('/profile',auth, user.profileDelete);
router.get('/logout',auth, user.logout);



export default router;