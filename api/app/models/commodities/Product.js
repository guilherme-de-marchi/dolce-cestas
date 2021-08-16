const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../databases/index`).commodities;

const Product = sequelize.define('Product', {

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

    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'Without description',
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

});

(async () => {
    await sequelize.sync();
})();