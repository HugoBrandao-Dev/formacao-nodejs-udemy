const database = require('./database')

// Ordena os registros através de seus preços e de forma decrescente.
database.select()
				.table("games")
				// DESC ou ASC. Também faz a ordenação alfabética.
				.orderBy("preco", "DESC")
			.then(dados => {
				console.log(dados)
			})
			.catch(error => {
				console.log(error)
			})
