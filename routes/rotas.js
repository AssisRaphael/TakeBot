const express = require('express')
const routes = express.Router()
const model = require('../models')
const path = require('path');
//const axios = require('axios');

//Página inicial da API
routes.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname+'/index.html'));
})

routes.get('/repositories', async function(req, res) {
    const repo = await model.getRepositories();
    res.send(repo);
});

module.exports = routes