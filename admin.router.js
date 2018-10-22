const express = require('express')

// Création d'un nouvel objet "Router"
let adminRouter = express.Router();

/**
 * GET /admin/
 * Affiche la page d'accueil de l'espace d'administration (et la liste des articles)
 */
adminRouter.get('/', (req, res) => {
    res.render('admin/admin')
})

/**
 * GET /admin/write
 * Affiche le formulaire permettant de créer un nouvel article
 */
adminRouter.get('/write', (req, res) => {
    res.render('admin/write')
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
adminRouter.delete('/delete/:id', (req, res) => {
    res.redirect('/admin')
})

// Exporte l'objet Router créé
module.exports = adminRouter