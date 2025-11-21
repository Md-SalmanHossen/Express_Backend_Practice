import express from 'express';
import { createBlog, getAllBlog } from '../controllers/blog.controller.js';

const router=express.Router();

router.post('/blogs',createBlog); 
router.get('/blogs',getAllBlog);

export default router;