import *as category from '../controllers/category.controller.js';
import auth from '../middlewares/auth_middleware.js';

import express from 'express';

const router=express.Router();

router.post('/', auth , category.createCategories);

export default router;
