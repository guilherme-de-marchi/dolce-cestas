const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../databases/index`).commodities;

const ProductTag = sequelize.define('ProductTag', {

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id',
        },
    },

    tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tag',
            key: 'id',
        },
    },

});

(async () => {
    await sequelize.sync();
})();