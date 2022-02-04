const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

// Biblioteca do Node para a geração de token
const jwt = require("jsonwebtoken")

// Senha SECRETA para a geração de Token
const JWTSecret = "woqieurqwiuoeruqwrqwrxcvxv"

/* Cors é um mecanismo de segurança que impede o acesso externo. Neste
caso, estamos configurando-o para que possamos consumir a API. */
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Middleware de autenticação
function auth(req, res, next) {

	// Header
	const authToken = req.headers['authorization']

	if (authToken) {

		// O token vem com "Bearer" na frente, e não precisamos dela para validação
		const bearer = authToken.split(' ')
		const token = bearer[1]

		// Verifica se o Token passado é válido
		jwt.verify(token, JWTSecret, (error, data) => {
			if (error) {
				res.status(401)
				res.json({ error: "Token inválido."})
			} else {

				/*
				Carrega mais alguns dados dentro da requisição, fazendo com que a rota
				tenha acesso a esses dados, também.
				*/
				req.token = token
				req.loggedUser = { id: data.id, email: data.email }
				req.curso = "Formação Node.JS"

				// Com o next() aqui, se a autenticação falhar, a rota não será executada.
				next()
			}
		})
	} else {
		res.status(401)
		res.json({ error: "Token inválido" })
	}
}

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
	],
	users: [
		{
			id: 1,
			name: "Tobias de Oliveira",
			email: "tobias@gmail.com",
			password: "tobias_123"
		},
		{
			id: 2,
			name: "Doralice Cruz",
			email: "doralice_cru@hotmail.com",
			password: "cruz321"
		}
	]
}

// Lista todos os jogos cadastrados
app.get("/games", auth, (req, res) => {

	// Define o código de estatus na resposta
	res.status(200)
	res.json(database.games)
})

// Busca por um jogo baseado no id informado na requisição
app.get("/game/:id", auth, (req, res) => {
	let paramsID = req.params.id
	if (paramsID) {
		if (!isNaN(paramsID)) {
			let id = parseInt(paramsID)

			// Faz a busca por um jogo que corresponda ao ID informado
			let game = database.games.find(game => game.id === id)

			if (game) {
				res.status(200)
				res.json({ game })
			} else {
				res.status(404)
			}
		} else {
			res.status(400)
		}
	} else {
		res.status(400)
	}
})

// Registra um novo game no banco de dados fake
app.post("/game", auth, (req, res) => {
	let { title, year, price } = req.body
	let id = parseInt(database.games[database.games.length - 1].id + 1)
	database.games.push({
		id,
		title,
		year,
		price
	})
	res.status(201)
})

// Faz a deleção em um jogo baseado no id informado pelo usuário
app.delete("/game/:id", auth, (req, res) => {
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
			res.status(index == -1 ? 404 : 200)
		} else {
			res.status(400)
		}
	} else {
		res.status(400)
	}
})

// Atualiza dados de um jogo já cadastrado
app.put("/game/:id", auth, (req, res) => {
	let paramsID = req.params.id
	if (paramsID) {
		if (!isNaN(paramsID)) {
			let id = parseInt(paramsID)

			// Faz a busca por um jogo que corresponda ao ID informado
			let game = database.games.find(game => game.id === id)

			if (game) {
				let { title, year, price } = req.body

				if (title) {
					game.title = title
				}
				if (year) {
					game.year = year
				}
				if (price) {
					game.price = price
				}
				res.status(200)
			} else {
				res.status(404)
			}
		} else {
			res.status(400)
		}
	} else {
		res.status(400)
	}
})

// Faz o login do usuário, para que gere um token de autenticação.
app.post("/auth", (req, res) => {
	let { email, password } = req.body

	if (email && password) {

		// Faz a busca pelo email dentro de Users
		let user = database.users.find(user => user.email == email )

		// Caso o email estaja cadastrado.
		if (user) {

			// Verifica se as senhas conferem
			if (user.password == password) {

				// Armazenar somente o ESSENCIAL, chamada de payload (carga útil)
				jwt.sign({
					id: user.id,
					email: user.email
				},
				JWTSecret,
				// Tempo em que o token expira
				{
					expiresIn: "2d"
				}, (error, token) => {
					if (error) {
						res.status(400)
						res.json({ error: "Falha interna." })
					} else {
						res.status(200)
						res.json({ token })
					}
				})
			} else {
				res.status(401)
				res.json({ error: "Credenciais erradas."})
			}
		} else {
			res.status(404)
			res.json({ error: "Usuário não encontrado."})
		}
	} else {
		res.status(400)
		res.json({ error: "Dados inválidos." })
	}
})

app.listen(4000, () => {
	console.log('App rodando...')
})
