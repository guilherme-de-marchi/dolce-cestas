const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

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