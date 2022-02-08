const database = require('./database')

/*
Faz um JOIN entre a tabela studios e a tabela games, utilizando a PK e a FK.
OBS: Sem os Alias (renomeações com AS), os dados irão se sobrescrever, quando os
campos tem nomes em comum.
Para retornar todos os campos de um tabela:
studios.*
games.*
*/
database.select(["studios.nome AS Studio", "games.nome AS Game", "games.preco AS Preco"])
				.table("games")
				.innerJoin("studios", "studios.game_id", "games.id")
			.then(dados => {
				console.log(dados)
			})
			.catch(error => {
				console.log(error)
			})
