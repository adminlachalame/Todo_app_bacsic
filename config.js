const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', null, {
    host: 'localhost',
    dialect:'mysql'
});

module.exports = sequelize;
