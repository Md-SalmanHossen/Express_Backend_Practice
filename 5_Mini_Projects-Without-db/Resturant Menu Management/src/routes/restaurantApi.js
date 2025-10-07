import *as crudController from '../controllers/restaurantCrudController.js'
import *as featureController from '../controllers/resturantFeatureController.js'
import express from 'express';
const router=express.Router();


//Featured Routes
router.get('/action/search', featureController.searchFoods);
router.get('/action/filter', featureController.filterFoods);
router.get('/action/sort', featureController.sortFoods);
router.get('/action/paginate', featureController.paginateFoods);
router.get('/action/top-rated', featureController.getTopRatedFoods);
router.get('/action/recommendation', featureController.getRecommendations);
router.get('/action/featured', featureController.getFeaturedFoods);
router.get('/action/stats', featureController.getMenuStats);
router.get('/action/random', featureController.getRandomFood);
router.get('/action/out-of-stock', featureController.getOutOfStockFoods);

// 1. CRUD Routes
router.post('/',crudController.createFoodMenu);
router.get('/',crudController.readAllFoodMenu);
router.delete('/',crudController.deleteFullFoodMenu );

router.get('/:id',crudController.readSingleFood);
router.put('/:id',crudController.updateFoodMenu);
router.patch('/:id',crudController.updatePartialFoodMenu );
router.delete('/:id',crudController.deleteSingleFoodMenu );



export default router;