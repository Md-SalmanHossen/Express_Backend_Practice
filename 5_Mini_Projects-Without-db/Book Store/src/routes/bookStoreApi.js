import express from 'express';
import *as crudController from '../controllers/bookCrudController.js';
import *as featureController from '../controllers/bookFeatureController.js';

const router =express.Router();

// features routing api
router.get('/action/search',featureController.searchBook);
router.get('/action/sort',featureController.sortBooks);
router.get('/action/filter',featureController.filterBooks);
router.get('/action/paginate',featureController.paginateBook);
router.get('/action/topRated',featureController.getTopRateBooks);
router.get('/action/recommendation',featureController.recommendationBooks);

// crud routing api
router.post('/',crudController.createBook);
router.get('/',crudController.readAllBook);
router.delete('/',crudController.DeleteAllBook);

router.get('/:id',crudController.readSingleBook);
router.put('/:id',crudController.updateBook);
router.patch('/:id',crudController.updateBookPartially);
router.delete('/:id',crudController.deleteSingleBook);


export default router;