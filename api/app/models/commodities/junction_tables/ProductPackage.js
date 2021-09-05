const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

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