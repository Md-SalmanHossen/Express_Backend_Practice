import *as restaurantController from '../controllers/restaurantCrudController.js'
import express from 'express';
const router=express.Router();





// 1. CRUD Routes
router.post('/',restaurantController.createFoodMenu);
router.get('/',restaurantController.readAllFoodMenu);
router.delete('/',restaurantController.deleteFullFoodMenu );

router.get('/:id',restaurantController.readSingleFood);
router.put('/:id',restaurantController.updateFoodMenu);
router.patch('/:id',restaurantController.updatePartialFoodMenu );
router.delete('/:id',restaurantController.deleteSingleFoodMenu );



export default router;