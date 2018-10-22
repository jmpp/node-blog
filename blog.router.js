const express = require('express')

// Création d'un nouvel objet "Router"
let blogRouter = express.Router();

/**
 * GET /
 * Affiche la page d'accueil et tous les articles
 */
blogRouter.get('/', (req, res) => {
    res.render('index')
})

/**
 * GET /article/:id
 * Affiche le détail d'un article en fonction de l'ID demandé
 */
blogRouter.get('/article/:id', (req, res) => {
    res.render('article')
})

// Exporte l'objet Router créé
module.exports = blogRouter