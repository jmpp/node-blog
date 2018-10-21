const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const PORT = 9000
const HOST = 'localhost'

app.get('/', (req, res) => {
    res.render('index', { name: 'JM' })
})

app.listen(PORT, HOST, () => console.log(`Le serveur écoute sur http://${HOST}:${PORT}`))