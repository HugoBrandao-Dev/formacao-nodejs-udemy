const database = require('./database')

// Faz a atualização de um registro, cujo id seja igual a 5.
// CUIDAR PARA NÃO ATUALIZAR TODOS OS REGISTROS DA TABELA DE UMA ÚNICA VEZ.
database.where({ id: 5 })
				.update({ preco: 25 })
				.table("games")
			.then(dado => {
				console.log(dado)
			})
			.catch(error => {
				console.log(error)
			})
