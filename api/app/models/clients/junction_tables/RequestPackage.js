const { Sequelize, DataTypes } = require('sequelize');

// Clients DB connection
const sequelize = require(`${__dirname}/../../../databases/index`).clients;

// Commodities DB connection
const commodities = require(`${__dirname}/../../../databases/index`).commodities;

const RequestPackage = sequelize.define('RequestPackage', {

    requestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Request',
            key: 'id',
        },
    },

    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: commodities.models.Package,
            key: 'id',
        },
    },

});

(async () => {
    await sequelize.sync();
})();