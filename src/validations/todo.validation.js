const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)
        
const createTodo = {
    body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
    })
}

const updateTodo = {
    body: Joi.object({
        title: Joi.string().optional(),
        description: Joi.string().optional(),
    })
}

const todoId = {
    params: Joi.object({
        todoId: Joi.objectId().required()
    })
}
module.exports = { createTodo, updateTodo, todoId }