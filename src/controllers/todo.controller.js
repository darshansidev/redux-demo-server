const todoServices = require('../services/todo.service');

const createTodo = async (req, res, next) => {
    try {
        const todoItem = req.body;

        const data = await todoServices.createTodoService(todoItem);

        res.status(200).json({ data: data, message: "Operation Successfully" });
    } catch (error) {
        next(error)
    }
}

const getAllTodo = async (req, res, next) => {
    try {
        const data = await todoServices.getAllTodoService();
        res.status(200).json({ data: data, message: "Operation Successfully" });
    } catch (error) {
        next(error)
    }
}

const getTodo = async (req, res, next) => {
    try {
        const data = await todoServices.getTodoService();
        res.status(200).json({ data: data, message: "Operation Successfully" });
    } catch (error) {
        next(error)
    }
}
const getTodoById = async (req, res, next) => {
    try {
        const todoId = req.params.todoId;
        const data = await todoServices.getTodoByIdService(todoId);
        res.status(200).json({ data: data, message: "Operation Successfully" });
    } catch (error) {
        next(error)
    }
}

const updateTodo = async (req, res, next) => {
    try {
        const todoId = req.params.todoId;
        const todoItem = req.body;

        const data = await todoServices.updateTodoService(todoId, todoItem);

        res.status(200).json({ data: data, message: "Operation Successfully" });

    } catch (error) {
        next(error)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const todoId = req.params.todoId;

        const data = await todoServices.deleteTodoService(todoId);

        res.status(200).json({ data: data, message: "Operation Successfully" });

    } catch (error) {
        next(error)
    }
}


module.exports = { createTodo, getAllTodo, getTodo, getTodoById, updateTodo, deleteTodo }