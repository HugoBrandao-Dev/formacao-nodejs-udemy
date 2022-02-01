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
	let id = parseInt(req.params.id)
	if (id) {
		if (!isNaN(id)) {
			res.statusCode = 200

			// Faz a busca por um jogo que corresponda ao ID informado
			let found = database.games.find(game => game.id === id)

			if (found) {
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

app.listen(4000, () => {
	console.log('App rodando...')
})