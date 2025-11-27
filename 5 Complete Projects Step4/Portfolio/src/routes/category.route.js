import *as category from '../controllers/category.controller.js';
import auth from '../middlewares/auth_middleware.js';

import express from 'express';

const router=express.Router();

router.post('/', auth , category.createCategories);//admin
router.get('/', category.readCategories);//public
router.put('/:id', auth , category.updateCategories);//admin
router.delete('/:id', auth , category.deleteCategories);//admin

export default router;
