const express = require('express')
const Article = require('./models/Article.model')

// Création d'un nouvel objet "Router"
let blogRouter = express.Router();

/**
 * GET /
 * Affiche la page d'accueil et tous les articles
 */
blogRouter.get('/', (req, res) => {
    Article.find().populate('author category').exec().then(articles => {
        res.render('index', { articles })
    }).catch(error => res.send(error.message))
})

/**
 * GET /article/:id
 * Affiche le détail d'un article en fonction de l'ID demandé
 */
blogRouter.get('/article/:id', (req, res) => {
    Article.findById( req.params.id ).populate('author category').exec().then(article => {
        if (!article) return Promise.reject(new Error('Article inexistant.'))

        res.render('article', { article })
    }).catch(error => res.send(error.message))
})

// Exporte l'objet Router créé
module.exports = blogRouter