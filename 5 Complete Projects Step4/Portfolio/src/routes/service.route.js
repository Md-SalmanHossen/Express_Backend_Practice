import *as service from '../controllers/category.controller.js';
import auth from '../middlewares/auth_middleware.js';

import express from 'express';

const router=express.Router();

router.post('/', auth , );//admin
router.get('/', );//public
router.put('/:id', auth , );//admin
router.delete('/:id', auth , );//admin

export default router;
