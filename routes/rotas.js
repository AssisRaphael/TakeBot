const express = require('express')
const routes = express.Router()
const model = require('../models')
const controler = require('../controllers')
const path = require('path');


//Página inicial da API
routes.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname+'/index.html'));
})

//Arquivo JSON com os repositórios da Takenet no github
routes.get('/repositories', async function(req, res) {
    const repositories = await model.getRepositories();
    res.send(repositories);
});

//Arquivo JSON com os repositórios da Takenet no github
routes.get('/lastRepositories', async function(req, res) {
    const lastRepositories = await controler.LastFiveRespositoriesCSharp();
    res.send(lastRepositories);
});

module.exports = routes