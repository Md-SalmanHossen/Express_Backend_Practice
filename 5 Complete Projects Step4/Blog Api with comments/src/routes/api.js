import express from 'express'
import { register,login } from './../controllers/userController.js';
import authMiddleware from './../middleware/authMiddleware.js';
import { createBlog, getBlog } from './../controllers/blogController.js';
import { addComment, getBlogWithComments } from './../controllers/commentController.js';

const router=express.Router();
 
   
router.post('/register',register);
router.post('/register',login );

router.post('/',authMiddleware,createBlog);
router.get('/',getBlog);

router.post('/',authMiddleware,addComment);
router.get('/:blogId',getBlogWithComments);

export default router;