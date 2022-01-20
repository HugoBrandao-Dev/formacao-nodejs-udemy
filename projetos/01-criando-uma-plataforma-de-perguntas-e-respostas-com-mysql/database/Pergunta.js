const Sequelize = require("sequelize")

const connection = require("./database")

// .define() recebe o nome da tabela, junto com sua estrutura em JSON.
const Pergunta = connection.define("perguntas", {
	// Campos da tabela
	titulo: {
		type: Sequelize.STRING,
		// Informa que não pode receber valores nulos
		allowNull: false
	},
	descricao: {
		type: Sequelize.TEXT,
		allowNull: false
	}
})

// Criará a tabela no banco de dados, se ela não existir.
Pergunta.sync({force: false})
	.then(() => {
		console.log("Tabela Pergunta criada com SUCESSO.")
	})
	.catch(erro => {
		console.log(erro)
	})
