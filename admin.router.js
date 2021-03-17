const express = require('express')
const Author = require('./models/Author.model')
const Category = require('./models/Category.model')
const Article = require('./models/Article.model')

// Création d'un nouvel objet "Router"
let adminRouter = express.Router();

/**
 * GET /admin/
 * Affiche la page d'accueil de l'espace d'administration (et la liste des articles)
 */
adminRouter.get('/', (req, res) => {
    Article.find().populate('author category').exec().then(articles => {
        res.render('admin/admin', { articles })
    }).catch(error => res.send(error.message))
})

/**
 * GET /admin/write
 * Affiche le formulaire permettant de créer un nouvel article
 */
adminRouter.get('/write', (req, res) => {
    // Va récupérer la liste des auteurs et des categories en base, et les passent à la vue
    Promise.all([
        Author.find().sort('name'),
        Category.find().sort('title')
    ])
    .then(([authors, categories]) => res.render('admin/write', { authors, categories }))
    .catch(error => res.send(error.message))
})

/**
 * POST /admin/write
 * Récupère les données du formulaire et crée l'article dans la base.
 */
adminRouter.post('/write', (req, res) => {
    Article.createArticle(req.body.titre, req.body.contenu, req.body.categorie, req.body.auteur).then(() => {
        res.redirect('/')
    }).catch(error => res.send(error.message))
})

/**
 * GET /admin/edit/:id
 * Affiche le formulaire permettant de supprimer un article via son ID
 */
adminRouter.get('/edit/:id', (req, res) => {
    res.render('admin/edit')
})

/**
 * DELETE /admin/delete/:id
 * Supprime l'article via son ID, et redirige vers l'accueil de l'espace d'administration
 */
adminRouter.get('/delete/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id).then(articleDeleted => {
        if (!articleDeleted) return Promise.reject(new Error('Article introuvable!'))
        res.redirect('/admin')
    }).catch(error => res.send(error.message))
})

// Exporte l'objet Router créé
module.exports = adminRouter