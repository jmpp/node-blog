/**
 * Fichier définissant le schéma Mongoose d'un article
 */

const mongoose = require('mongoose')
const shortid = require('shortid')

// Création d'un nouveau Schema mongoose : ce schéma permettra d'indiquer à mongoose quelle doit être la structure d'un document `Article` qui entre dans la base.
// C'est un peut comme définir les champs d'une table avec MySQL et phpMyAdmin
const articleSchema = mongoose.Schema({
    '_id'         : {type : String, required : true, default : shortid.generate  },
	'title'       : {type : String, required : true},
	'dateCreated' : {type : Date,   required : true, default : Date.now},
	'content'     : {type : String, required : true},
	'category'    : {type : String, required : true, ref : 'Category'},
	'author'      : {type : String, required : true, ref : 'Author'},
})

articleSchema.statics.createArticle = function createArticle(title, content, category, author) {
    return this.create({
        title,
        content,
        category,
        author
    })
}

articleSchema.statics.updateArticle = function updateArticle(id, title, content, category, author) {
    return this.findByIdAndUpdate(id, {
        title,
        content,
        category,
        author
    })
}

// Et sur la base de ce schéma, on exporte un nouveau modèle Mongoose qui permettra de manipuler et créer des documents de type `Article` dans la base Mongo
module.exports = mongoose.model('Article', articleSchema)
