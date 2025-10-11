import *as crudController from '../controllers/crudController.js'
import express from 'express';
const router=express.Router();

router.post('/',crudController.createFoodMenu);
router.get('/',crudController.readAllFoodMenu);

export default router;