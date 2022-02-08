const database = require('./database')

/*
O comando abaixo faz a seleção de todos os jogos cadastrados na tabela games
OBS: select com asteriscos somente entre aspas, ou sem parâmetro = todos os campos;
*/
// database.select(['nome', 'preco']).table("games")
// 	.then(dados => {
// 		console.log(dados)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

const dado = {
	nome: 'Nightmare Creatures',
	preco: 21
}

// Nested Queries, fazendo uma inserção e buscando todos os dados presentes.
database.insert(dado).into("games")
	.then(dado => {
		console.log('Dados inseridos')
		database.select("*").table("games")
			.then(dados => {
				console.log(dados)
			})
			.catch(error => {
				console.log(error)
			})
	})
	.catch(error => {
		console.log(error)
	})
