const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../databases/index`).main;

const Client = sequelize.define('Client', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },

});

(async () => {
    await sequelize.sync();
})();