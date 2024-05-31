const { Todo } = require('../models');

exports.getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.render('index', { todos });
    } catch (err) {
        res.status(500).render('error', { error: err.message });
    }
};

exports.addTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        await Todo.create({ title, description });
        res.redirect('/');
    } catch (err) {
        res.status(500).render('error', { error: err.message });
    }
};



exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        await Todo.update({ title, description, completed }, {
            where: { id }
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).render('error', { error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.destroy({
            where: { id }
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).render('error', { error: err.message });
    }
};
