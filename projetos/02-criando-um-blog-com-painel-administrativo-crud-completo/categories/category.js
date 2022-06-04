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

/*
Força a criação de uma tabela. Foi usada aqui porque
uma tabela foi criada antes de definirmos o relacionamento
entre dela com outra tabela (por causa do nodemon). Sendo assim, usamos o sync somente
uma vez e depois podemos apagar ou comentar.


Category.sync({ force: true })
*/

Category.sync({ force: false })

module.exports = Category
