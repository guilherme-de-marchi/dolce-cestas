const { Sequelize, DataTypes } = require('sequelize');

// Commodities DB connection
const sequelize = require(`${__dirname}/../../../databases/index`).commodities;

const PackageTag = sequelize.define('PackageTag', {

    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Package',
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