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

app.get("/games", (req, res) => {
	
	// Define o código de estatus na resposta
	res.statusCode = 200
	res.json(database.games)
})

app.listen(4000, () => {
	console.log('App rodando...')
})