const database = require('./database')

/* =========================== DADOS A SEREM INSERIDOS ====================== */

// Histórico de dados que foram inseridos

// const dado = {
// 	nome: 'Sea of Thieves',
// 	preco: 50.67
// }

const dado = {
	nome: 'Silent Hills',
	preco: 100.5
}

const dados = [
	{
		nome: 'The Last Of Us',
		preco: 150.20
	},
	{
		nome: 'Knight and Merchants',
		preco: 20.50
	},
	{
		nome: 'Sim Farm',
		preco: 10
	},
	{
		nome: 'Counter Strike 1.8',
		preco: 40.25
	}
]

/* =============================== INSERÇÃO DE DADOS ======================== */

// Histórico de inserção de dados

// let query = database.insert(dado).into("games")
// 	.then(dado => {
// 		console.log('Dados inseridos.')
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

// let query = database.insert(dado).into("games")
// 	.then(dado => {
// 		console.log('Dados inserido.')
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

// Inserindo vários jogos
let query = database.insert(dados).into('games')
	.then(dado => {
		console.log(dado)
	})
	.catch(error => {
		console.log(error)
	})
