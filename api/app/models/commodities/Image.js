const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../databases/index`).main;

const Image = sequelize.define('Image', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'Without description',
    },

});

(async () => {
    await sequelize.sync();
})();