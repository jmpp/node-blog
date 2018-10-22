const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const PORT = 9000
const HOST = 'localhost'

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/article/:id', (req, res) => {
    res.render('article')
})

app.get('/admin', (req, res) => {
    res.render('admin/admin')
})

app.get('/admin/write', (req, res) => {
    res.render('admin/write')
})

app.get('/admin/edit/:id', (req, res) => {
    res.render('admin/edit')
})

app.listen(PORT, HOST, () => console.log(`Le serveur écoute sur http://${HOST}:${PORT}`))