const database = require('./database')

// Fazendo a inserção de um novo registro em uma tabela que tem uma FK.
database.insert({
	nome: "Valve",
	game_id: 6
}).table("studios")
	.then(dado => {
		console.log(dado)
	})
	.catch(error => {
		console.log(error)
	})
