const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../databases/index`).commodities;

const PackageImage = sequelize.define('PackageImage', {

    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Package',
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