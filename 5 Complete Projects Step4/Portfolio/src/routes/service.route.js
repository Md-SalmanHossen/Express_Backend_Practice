import *as service from '../controllers/service.controller.js';
import auth from '../middlewares/auth_middleware.js';
import upload from '../middlewares/multer.config.js';

import express from 'express';

const router=express.Router();

router.get('/', service.listAllService);//public

router.post('/', auth ,upload.single('image'), service.createService);//admin
router.put('/:id', auth , upload.single('image'), service.updateService);
router.delete('/:id', auth ,service.deleteService);

export default router;
