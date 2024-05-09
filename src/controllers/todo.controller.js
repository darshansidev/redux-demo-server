const todoServices = require('../services/todo.service');

const createTodo = (req, res, next) => {
    try {

        res.status(200).json({ message: "Todo Created" });
    } catch (error) {
        next(error)
    }
}

const getTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo get" });
    } catch (error) {
        next(error)
    }
}

const updateTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo update" });
    } catch (error) {
        next(error)
    }
}

const deleteTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo delete" });
    } catch (error) {
        next(error)
    }
}


module.exports = { createTodo, getTodo, updateTodo, deleteTodo }