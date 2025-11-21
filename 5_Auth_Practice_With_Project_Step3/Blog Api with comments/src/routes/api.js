import express from 'express'
import { register,login } from './../controllers/userController.js';
import authMiddleware from './../middleware/authMiddleware.js';
import { createBlog, getBlog } from './../controllers/blogController.js';
import { addComment, getBlogWithComments } from './../controllers/commentController.js';

const router=express.Router();
 
   
router.post('/register',register);
router.post('/login',login );

router.post('/blogs',authMiddleware,createBlog);
router.get('/blogs',getBlog);

router.post('/comments',authMiddleware,addComment);
router.get('/comments/:blogId',getBlogWithComments);

export default router;