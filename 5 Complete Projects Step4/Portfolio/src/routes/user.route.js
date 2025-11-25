import express from "express";
import auth from './../middlewares/auth_middleware.js';
import *as user from '../controllers/user.controller.js';
import  fileUpload  from "../controllers/file.controller.js";
import upload from './../config/multer.config.js';

const router=express.Router();


router.post('/signup',user.signup);
router.post('/verify-email',user.verifyEmail);
router.post('/login',user.login);

router.get('/profile', auth, user.profile);
router.put('/profile', auth, user.updateProfile);

router.post('/forgot-password',user.forgotPassword);
router.post('/verify-reset-otp',user.verifyOtpForReset);
router.post('/reset-password', user.resetPassword);

router.post('/change-password', auth, user.changePassword);

router.post('/logout', auth, user.logout);
router.delete('/profile', auth, user.profileDelete);

router.post('/uploads',upload.single('filename') ,fileUpload);

export default router;