const database = require('./database')

// Deleta um jogo de nome "The Last Of Us"
database.where({ nome: "The Last Of Us" })
				.delete()
				.table("games")
	.then(dado => {
		// dado (o retorno) é a quantidade de registros deletados
		console.log(dado)
	})
	.catch(error => {
		console.log(error)
	})
