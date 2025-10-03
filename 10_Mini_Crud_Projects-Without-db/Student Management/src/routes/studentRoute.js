
import *as studentController from '../controllers/studentController.js'
import express from 'express';
const router=express.Router();


router.get('/search',studentController.searchStudent);
router.get('/sort',studentController.sortingStudent);

router.post('/',studentController.createStudent);

router.get('/',studentController.readAllStudent);
router.get('/:id',studentController.readSingleStudent);

router.put('/:id',studentController.updateStudent);
router.patch('/:id',studentController.updatePartially);

router.delete('/:id',studentController.deleteSingleStudent);
router.delete('/',studentController.deleteAllStudent);




export default router;