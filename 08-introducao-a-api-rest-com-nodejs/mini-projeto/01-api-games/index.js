const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Banco de dados fake
let database = {
	games: [
		{
			id: 1,
			title: "Call of Duty MW",
			year: 2019,
			price: 60
		},
		{
			id: 2,
			title: "Sea of Thieves",
			year: 2018,
			price: 40
		},
		{
			id: 3,
			title: "Minecraft",
			year: 2012,
			price: 20
		}
	]
}

// Lista todos os jogos cadastrados
app.get("/games", (req, res) => {

	// Define o código de estatus na resposta
	res.statusCode = 200
	res.json(database.games)
})

// Busca por um jogo baseado no id informado na requisição
app.get("/game/:id", (req, res) => {
	let paramsID = req.params.id
	if (paramsID) {
		if (!isNaN(paramsID)) {
			let id = parseInt(paramsID)
			
			// Faz a busca por um jogo que corresponda ao ID informado
			let found = database.games.find(game => game.id === id)
			
			if (found) {
				res.statusCode = 200
				res.json(found)
			} else {
				res.sendStatus(404)
			}
		} else {
			res.sendStatus(400)
		}
	} else {
		res.sendStatus(400)
	}
})

// Registra um novo game no banco de dados fake
app.post("/game", (req, res) => {
	let { title, year, price } = req.body
	let id = parseInt(database.games.length + 1)
	database.games.push({
		id,
		title,
		year,
		price
	})
	res.sendStatus(201)
})

// Faz a deleção em um jogo baseado no id informado pelo usuário
app.delete("/game/:id", (req, res) => {
	let paramsID  = req.params.id
	if (paramsID) {
		if (!isNaN(paramsID)) {
			let id = parseInt(paramsID)
			/*
			findIndex fará a busca por um chave (id) que tenha valor 
			igual ao informado pelo usuário.
			*/
			let index = database.games.findIndex(game => game.id === id)

			if (index != -1) {
				database.games.splice(index, 1)
			}
			res.sendStatus(index == -1 ? 404 : 200)
		} else {
			res.sendStatus(400)
		}
	} else {
		res.sendStatus(400)
	}
})

// Atualiza dados de um jogo já cadastrado
app.put("/game/:id", (req, res) => {
	let paramsID = req.params.id
	if (paramsID) {
		if (!isNaN(paramsID)) {
			let id = parseInt(paramsID)
			
			// Faz a busca por um jogo que corresponda ao ID informado
			let found = database.games.find(game => game.id === id)
			
			if (found) {
				let { title, year, price } = req.body

				if (title) {
					found.title = title
				}
				if (year) {
					found.year = year
				}
				if (price) {
					found.price = price
				}
				res.sendStatus(200)
			} else {
				res.sendStatus(404)
			}
		} else {
			res.sendStatus(400)
		}
	} else {
		res.sendStatus(400)
	}
})

app.listen(4000, () => {
	console.log('App rodando...')
})