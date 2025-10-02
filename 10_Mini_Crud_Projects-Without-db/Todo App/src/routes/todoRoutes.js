import *as todoController from '../controllers/todoController.js'
import express from "express";

const router=express.Router();

router.post('/create',todoController.createToDo)
router.get('/',todoController.readAll)
router.get('/:id',todoController.readById)
router.patch('/:id',todoController.updateById)
router.put('/:id',todoController.updateToDo)
router.delete('/:id',todoController.deleteToDo)

export default router;