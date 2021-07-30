#!/bin/bash
#sequelizerc.sh

if [ $1 = 'admins' ]; then
    npx sequelize $2 $4 $3 --config ./app/configs/database/admins.js --migrations-path ./app/migrations/admins --models-path ./app/models/admins

elif [ $1 = 'clients' ]; then
    npx sequelize $2 $4 $3 --config ./app/configs/database/clients.js --migrations-path ./app/migrations/clients --models-path ./app/models/clients

elif [ $1 = 'commodities' ]; then
    npx sequelize $2 $4 $3 --config ./app/configs/database/commodities.js --migrations-path ./app/migrations/commodities --models-path ./app/models/commodities

else
    echo "error"

fi