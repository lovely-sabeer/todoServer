const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;
