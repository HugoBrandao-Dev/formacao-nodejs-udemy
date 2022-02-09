const database = require('./database')

/*
Faz o relacionamento M <-> M entre as tabelas studios, games e a games_studios,
tranzendo o nome do jogo, seu preço e os estudios que desenvolveram o jogo, e
armazena essas informações dentro de um objeto JS.
*/
database.select([
					'studios.nome AS studio',
					'games.nome AS game',
					'games.preco AS preço'
				]).table('games_studios')
				.innerJoin('games', 'games.id', 'games_studios.game_id')
				.innerJoin('studios', 'studios.id', 'games_studios.studio_id')
				// Outra sintaxe do Where
				.where("games.id", 8)
			.then(dados => {
				let studiosGamesList = dados
				let game = {
					jogo: studiosGamesList[0].game,
					preco: studiosGamesList[0]['preço'],
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
