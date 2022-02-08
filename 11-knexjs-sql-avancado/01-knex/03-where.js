const database = require('./database')

const pesquisar = {
	nome: 'The Last Of Us'
}

// Procura um jogo, de nome The Last Of Us dentro da tabela games.
// let query = database.where(pesquisar).table("games")


/*
Procura um jogo, de nome The Last Of Us dentro da tabela games, retornado só os
campos desejados.
*/
// let query = database.select(["nome", "preco"]).where(pesquisar)


// Busca o nome e o preco de um jogo chamado The Last of Us e de id 2.
// let query = database.select(['nome', 'preco'])
// 										.where(pesquisar)
// 										// Atua como um AND
// 										.where({id: 2})
// 										.table("games")


// Busca um jogo cujo nome seja igual a Sim Farm ou que tenha o id: 1.
// let query = database.select()
// 										.where({nome: 'Sim Farm'})
// 										// Atua como um OR
// 										.orWhere({id: 1})
// 										.table("games")


// console.log(query.toQuery())

// Busca um jogo que tenha nome Nighmare Creatures ou preco > 50.
// let query = database.select()
// 										// Dar preferencia em utilizar somente um tipo de Where.
// 										.whereRaw("nome = 'Nighmare Creatures' OR preco > 50")
// 										.table("games")
// 									.then(dados => {
// 										console.log(dados)
// 									})
// 									.catch(error => {
// 										console.log(error)
// 									})


// Para query SQL nativa
database.raw("SELECT nome, preco FROM games WHERE preco >= 100")
	.then(dados => {
		// Retornará dois arrays, os dados e tambem os column definitions (não é erro).
		console.log(dados)
	})
	.catch(error => {
		console.log(error)
	})
