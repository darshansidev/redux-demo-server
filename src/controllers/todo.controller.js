const todoServices = require('../services/todo.service');

const createTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo Created" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo get" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const updateTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo update" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const deleteTodo = (req, res, next) => {
    try {
        res.status(200).json({ message: "Todo delete" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


module.exports = { createTodo, getTodo, updateTodo, deleteTodo }