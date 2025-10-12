import *as crudController from '../controllers/crudController.js'
import express from 'express';
const router=express.Router();

router.post('/',crudController.createFoodMenu);
router.get('/',crudController.readAllFoodMenu);
router.get('/:id',crudController.readSingleFoodMenu);
console.log(crudController.updateFoodMenu);
router.put('/:id',crudController.updateFoodMenu);


export default router;