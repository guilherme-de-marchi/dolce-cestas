#!/bin/bash
#sequelizerc.sh

if [ $1 = 'admins' ]; then
    npx sequelize $2 $4 $3 --options-path ./app/configs/database/admins.js --env admins

elif [ $1 = 'clients' ]; then
    npx sequelize $2 $4 $3 --options-path ./app/configs/database/clients.js --env clients

elif [ $1 = 'commodities' ]; then
    npx sequelize $2 $4 $3 --options-path ./app/configs/database/commodities.js --env commodities

else
    echo "error"

fi