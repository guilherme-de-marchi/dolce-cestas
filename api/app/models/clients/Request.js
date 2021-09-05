const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../databases/index`).main;

const Client = sequelize.define('Request', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },

    freight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
    },

    finished: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },

});

(async () => {
    await sequelize.sync();
})();