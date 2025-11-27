import *as service from '../controllers/service.controller.js';
import auth from '../middlewares/auth_middleware.js';

import express from 'express';

const router=express.Router();

router.get('/', );//public

router.post('/', auth , service.createService);//admin
router.put('/:id', auth , service.updateService);
router.delete('/:id', auth ,service.deleteService);

export default router;
