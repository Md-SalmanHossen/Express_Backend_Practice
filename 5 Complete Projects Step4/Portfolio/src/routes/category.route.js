import *as category from '../controllers/category.controller.js';
import auth from './../middlewares/auth_middleware';

import express from 'express';

const router=express.Router();

router.post('/category', auth , category.createCategories);

export default router;
