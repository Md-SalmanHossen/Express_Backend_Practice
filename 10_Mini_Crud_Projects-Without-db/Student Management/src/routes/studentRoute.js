
import *as studentController from '../controllers/studentController.js'
import express from 'express';
const router=express.Router();

router.post('/:id',studentController.createStudent);

router.get('/',studentController.readALlStudent);
router.get('/:id',studentController.deleteSingleStudent);

router.put('/:id',studentController.updateStudent);
router.patch('/:id',studentController.updatePartially);

router.delete('/:id',studentController.deleteSingleStudent);
router.delete('/',studentController.deleteAllStudent);

router.get('/search',studentController.searchStudent);
router.get('/sort',studentController.sortingStudent);



export default router;