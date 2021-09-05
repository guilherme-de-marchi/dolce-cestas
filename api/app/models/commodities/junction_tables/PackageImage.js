const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../../databases/index`).main;

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