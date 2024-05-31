const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};
