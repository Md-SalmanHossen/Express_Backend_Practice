import express from 'express'
import { register,login } from './../controllers/userController.js';
import authMiddleware from './../middleware/authMiddleware.js';
import { createBlog } from './../controllers/blogController.js';

const router=express.Router();
 
   
router.post('/register',register);
router.post('/register',login );

router.post('/',authMiddleware,createBlog);
