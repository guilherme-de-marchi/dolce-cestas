const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../../databases/index`).commodities;

const ProductImage = sequelize.define('ProductImage', {

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id',
        },
    },

    imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Image',
            key: 'id',
        },
    },

});

(async () => {
    await sequelize.sync();
})();