const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

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