const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')



router.get('/', todoController.getAllTodoAPI);
router.post('/', todoController.addTaskTodoAPI);
router.put('/update/:id', todoController.updateTaskTodoAPI);
router.post('/delete/:id', todoController.deleteTodoAPI);
//api thu 2 dung de xoa
router.post('/:id', todoController.deleteTodoAPI);


module.exports = router