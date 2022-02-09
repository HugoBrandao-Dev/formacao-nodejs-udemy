const database = require('./database')

// let queryInsert = database.insert({
// 	nome: 'Rockstar Games',
// 	game_id: 5
// }).table('studios')
// 	.then(dado => {
// 		console.log(dado)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

/*
Busca dados de dentro de duas tabelas e precessa-os para dentro de um objeto JS.
*/
let querySelect = database.select([
									'studios.nome AS studio',
									'games.*'])
								.table('games')
								.innerJoin('studios', 'studios.game_id', 'games.id')
								.whereRaw('studios.game_id = 5')
							.then(dados => {
								let studiosGamesList = dados
								let game = {
									id: studiosGamesList[0].id,
									jogo: studiosGamesList[0].nome,
									studios: []
								}
								studiosGamesList.forEach(registro => {
									game.studios.push(registro.studio)
								})
								console.log(game)
							})
							.catch(error => {
								console.log(error)
							})
