const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../databases/index`).commodities;

const Tag = sequelize.define('Tag', {

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

});

(async () => {
    await sequelize.sync();
})();