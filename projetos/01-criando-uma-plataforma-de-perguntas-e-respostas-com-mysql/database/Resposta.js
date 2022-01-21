const Sequelize = require("sequelize")
const connection = require("./database")

const Resposta = connection.define("respostas", {
	corpo: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	pergunta_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
})

Resposta.sync({ force: false })
	.then(() => {
		console.log("Tabela Resposta criada com SUCESSO")
	})
	.catch(erro => {
		console.log(erro)
	})

module.exports = Resposta