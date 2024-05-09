const todoModel = require('../models/todo.model');
const { HttpException } = require('../exceptions/HttpException');
const { mongoose } = require('mongoose');

const createTodoService = async (todoData) => {
    if (!todoData) throw HttpException(409, "Todo Not Created");

    const newTodo = new todoModel(todoData);

    const collectionData = await newTodo.save();

    if (!collectionData) throw HttpException(409, "Todo Not Created");

    return collectionData;
}

const getTodoService = async () => {

    const data = await todoModel.find();


    return data;
}

const updateTodoService = async (todoId, todoItem) => {

    const updatedCollectionData = await todoModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(todoId) }, { ...todoItem }, { new: true });

    if (!updatedCollectionData) throw HttpException(409, "Todo Not Updated");

    return updatedCollectionData;
}

const deleteTodoService = async (todoId) => {

    const deletedCollectionData = await todoModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(todoId) }, { new: true });

    if (!deletedCollectionData) throw HttpException(409, "Todo Not deleted");

    return deletedCollectionData;
}

module.exports = { createTodoService, getTodoService, updateTodoService, deleteTodoService }


