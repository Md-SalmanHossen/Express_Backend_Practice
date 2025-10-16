import *as crudController from '../controllers/crudController.js'
import *as featureController from '../controllers/featureController.js'
import express from 'express';
const router=express.Router();


router.get('/action/search',featureController.searchController);
router.get('/action/sort',featureController.sortController);
router.get('/action/filter',featureController.filterController);

router.post('/',crudController.createFoodMenu);
router.get('/',crudController.readAllFoodMenu);
router.get('/:id',crudController.readSingleFoodMenu);
router.put('/:id',crudController.updateFoodMenu);
router.delete('/:id',crudController.deleteSingleMenu);
router.delete('/',crudController.deleteAllMenu);


export default router;