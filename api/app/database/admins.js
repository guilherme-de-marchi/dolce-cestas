const Sequelize = require('sequelize');


const { development } = require('../configs/database/admins.json');

module.exports = (user, password) => {
    try { 
        return new Sequelize( 
            development.database, 
            user, 
            password, 
            {
                host: development.host,
                port: development.port,
                dialect: development.dialect
            } 
        ) 
    }
    catch(err) {
        console.log(err);
        return err;
    }
}