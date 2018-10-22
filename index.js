const path = require('path')
const express = require('express')
const app = express()

const adminRouter = require('./admin.router.js')
const blogRouter = require('./blog.router.js')

app.set('view engine', 'pug') // Indique à Express que le moteur de templating à utiliser sera "Pug"
app.set('views', './views') // Indique à Express le dossier où se trouvent les vues (fichiers .pug)

const PORT = 9000
const HOST = 'localhost'

app.use(express.static(path.join(__dirname, 'public'))) // Vérifie les requêtes de ressources publiques (css, images, js, ...)
app.use('/', blogRouter) // Traite les routes pour la partie front-office
app.use('/admin', adminRouter) // Traite les routes pour la partie back-office (/admin)

// Démarrage de l'application
app.listen(PORT, HOST, () => console.log(`Le serveur écoute sur http://${HOST}:${PORT}`))