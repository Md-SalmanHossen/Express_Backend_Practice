import *as crudController from '../controllers/crudController.js'
import express from 'express';
const router=express.Router();

router.get('/',crudController.createFoodMenu);

export default router;