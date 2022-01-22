const Sequelize = require("sequelize")
const connection = require("../database/database")

const Category = connection.define("categories", {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	/*
	O slug é o title adaptado, para que possamos usa-lo como
	critério de busca em uma URL.
	*/
	slug: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = Category