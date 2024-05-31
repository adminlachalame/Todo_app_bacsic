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

///tao api
exports.getAllTodoAPI = async (req, res) =>{
    try{
        const todos = await Todo.findAll();
        res.json(todos);
    }catch (err){
        res.status(500).render('error', {err:err.message});
    }
};

exports.addTaskTodoAPI = async (req,res) =>{
    const {title, description} = req.body;
    try{
      const todo = await Todo.create({title, description});
       res.json(todo);
    }catch (err){
        res.status(500).json('error',{err:err.message});
    }
};

exports.updateTaskTodoAPI = async (req,res) =>{
    const {id} = req.params;
    const {title, description, completed} = req.body;
    try {
        const todo = await Todo.findByPk(id);
        if(!todo){
            return res.status(404).json({error:'khong tim thay id'});
        }
        await todo.update({title, description,completed});
        res.json(todo);
    }catch (err){
        res.status(500).json('error',{err:err.message});
    }
};

exports.deleteTodoAPI = async (req,res) =>{
    const {id} = req.params;
    try{
        await Todo.destroy({
            where: { id }
        });
        res.json({message:'da xoa thanh cong'})
    }catch (err){
        res.status(500).json('xoa khong dc',{err:err.message});
    }
};