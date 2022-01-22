const Sequelize = require("sequelize")
const connection = require("../database/database")

const Article = connection.define("articles", {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false
	},
	// Armazenará o conteúdo do artigo
	body: {
		type: Sequelize.TEXTO,
		allowNull: false
	}
})

module.exports = Article