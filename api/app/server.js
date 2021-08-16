const express = require('express');
const sequelize = require(`${__dirname}/databases/index`);

// Init models
require(`${__dirname}/models/init`);

const app = express();

app.get('/api', async (req, res) => {
    res.send('im here');
})

app.listen(3000);