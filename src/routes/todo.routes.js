const router = require('express').Router();
const { validate } = require('express-validation');
const { createTodo, updateTodo, todoId } = require('../validations/todo.validation');
const todoController = require('../controllers/todo.controller');

router.get('/get-todo-list', todoController.getTodo);
router.get('/get-All-todo-list', todoController.getAllTodo);
router.get('/get-todo-item/:todoId', todoController.getTodoById);
router.post('/add-todo-list', validate(createTodo), todoController.createTodo);
router.put('/update-todo-list/:todoId', validate(todoId), validate(updateTodo), todoController.updateTodo);
router.delete('/delete-todo-list/:todoId', validate(todoId), todoController.deleteTodo);


module.exports = router;
