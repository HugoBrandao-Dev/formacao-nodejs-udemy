const database = require('./database')

async function testeTransacao() {
	try {
		/*
		Cria uma transação assíncrona.
		O transaction é uma função que tem um callback, que deve ser assíncrono,
		também.
		*/
		await database.transaction(async transacao => {
			await database.insert({ nome: 'Maxis' }).table('studios')
			await database.insert({ nome: 'Pyxeralia' }).table('studios')
			await database.insert({ nome: 'Mojang' }).table('studios')
			await database.insert({ nome: 'Gearbox' }).table('studios')
		})
	} catch(error) {
		console.log(error)
	}
}

testeTransacao()
