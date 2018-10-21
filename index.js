const express = require('express')

const app = express()

const PORT = 9000
const HOST = 'localhost'

app.get('/', (req, res) => {
    res.end('Bienvenue sur la home')
})

app.listen(PORT, HOST, () => console.log(`Le serveur écoute sur http://${HOST}:${PORT}`))