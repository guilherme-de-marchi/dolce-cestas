const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

const RequestPackage = sequelize.define('RequestPackage', {

    requestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Requests',
            key: 'id',
        },
    },

    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Packages',
            key: 'id',
        },
    },

});

(async () => {
    await sequelize.sync();
})();