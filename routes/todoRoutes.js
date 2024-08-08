const express = require('express');
const router = express.Router();
const TodoModel = require('../models/todoModel');

// POST endpoint
router.post('/add', async (req, res) => {
    const { title } = req.body;

    try {
        const newTodo = new TodoModel({ title });
        await newTodo.save();
        res.status(200).send("Received successfully!");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET endpoint
router.get('/receive', async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT endpoint
router.put('/update/:id', async (req, res) => {
    try {
        const { title } = req.body;
        const id = req.params.id;
        const updateTodo = await TodoModel.findByIdAndUpdate(id, { title }, { new: true });
        if (!updateTodo) {
            res.status(404).json({ message: "Todo not found" });
        } else {
            res.status(200).json(updateTodo);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE endpoint
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TodoModel.findByIdAndDelete(id);
        if (!result) {
            res.status(404).json({ message: "Todo not found" });
        } else {
            res.status(200).json({ message: "Todo deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
