const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: String,
        default: ''
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Todo', todoSchema);