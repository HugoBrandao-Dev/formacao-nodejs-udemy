const database = require('./database')

// let queryInsert = database.insert({
// 	nome: 'Electronic Arts',
// 	game_id: 5
// }).table('studios')
// 	.then(dado => {
// 		console.log(dado)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

/*
Traz todos os jogos dos studios, desde que o jogo custe mais do que R$ 30,00.
*/
let querySelect = database.select([
			'studios.nome AS Studio',
			'games.nome AS Jogo',
			'games.preco AS Preço'
		])
		.table('games')
		.innerJoin('studios', 'studios.game_id', 'games.id')
		.whereRaw('studios.nome = "Electronic Arts"')
	.then(dados => {
		console.log(dados)
	})
	.catch(error => {
		console.log(error)
	})
