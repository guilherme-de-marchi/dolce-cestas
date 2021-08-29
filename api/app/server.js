const express = require('express');
const sequelize = require(`${__dirname}/databases/index`);

// Init models
require(`${__dirname}/models/init`);

const app = express();

app.get('/api', async (req, res) => {
    res.send('im here');

    sequelize.clients.models.Request.create({
        freight: 22.0,
        discount: 20.23,
        clientId: 1
    })
})

app.listen(3000);