const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../databases/index`).commodities;

const ProductPackage = sequelize.define('ProductPackage', {

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id',
        },
    },

    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Package',
            key: 'id',
        },
    },

});

(async () => {
    await sequelize.sync();
})();