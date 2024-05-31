const { Sequelize } = require('sequelize');
const sequelize = require('../config');
const TodoModel = require('./todo');

// Define the Todo model
const Todo = TodoModel(sequelize, Sequelize);

const syncDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
        await sequelize.sync({ alter: true }); // Use alter: true to avoid dropping tables
        console.log("Database synchronized successfully.");
    } catch (e) {
        console.error("Error while trying to sync the database:", e);
    }
};

module.exports = { sequelize, syncDB, Todo };
