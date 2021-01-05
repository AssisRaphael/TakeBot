const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/rotas')

porta = 21262;

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

// Configura a API para escutar na porta 21262
app.listen(porta, () => {
    console.log(`Express started at http://localhost:${porta}`)
})