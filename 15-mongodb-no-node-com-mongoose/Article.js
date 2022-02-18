const mongoose = require('mongoose')

// Representa uma coleção
const ArticleModel = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	},
	special: Boolean,
	resume: {
		content: String,
		author: String
	}
})

module.exports = ArticleModel