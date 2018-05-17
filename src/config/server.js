const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(require('./cors'))

server.listen(port, () => console.log(`Backend na porta ${port}`))

module.exports = server