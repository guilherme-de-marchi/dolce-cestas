const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

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