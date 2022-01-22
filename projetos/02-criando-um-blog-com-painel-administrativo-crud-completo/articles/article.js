const Sequelize = require("sequelize")
const connection = require("../database/database")

/*
Importamos um model para dentro do outro para fazer 
um relacionamento entre eles.
*/
const Category = require("../categories/category")

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
		type: Sequelize.TEXT,
		allowNull: false
	}
})

/*
Relacionamento 1 <=> 1, onde um artigo pertence a uma 
categoria e vice-versa.
*/
Article.belongsTo(Category)

/*
Relacionamento 1 <=> N, onde uma categoria pertence a
vários artigos e vice-versa.
*/
Category.hasMany(Article)

/*
Força a criação de uma tabela. Foi usada aqui porque
uma tabela foi criada antes de definirmos o relacionamento
entre dela com outra tabela (por causa do nodemon). Sendo assim, usamos o sync somente
uma vez e depois podemos apagar ou comentar.


Article.sync({ force: true })
*/

module.exports = Article