import express from "express";
import auth from './../middlewares/auth_middleware.js';
import *as user from '../controllers/user.controller.js';

const router=express.Router();


router.post('/signup',user.signup);
router.post('/verify-email',user.verifyEmail);
router.post('/login',user.login);

router.get('/profile', auth, user.profile);
router.put('/profile', auth, user.updateProfile);

router.post('/forgot-password',user.forgotPassword);

export default router;