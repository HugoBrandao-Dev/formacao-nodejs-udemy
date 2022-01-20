const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// Informa que o view engine, com que o Express irá trabalhar, será o EJS.
app.set("view engine", "ejs")
app.use(express.static("public"))

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// Rotas
app.get("/", (req, res) => {
	res.render("index")
})

app.get("/perguntar", (req, res) => {
	res.render("perguntar")
})

app.post("/salvarPergunta", (req, res) => {
	let titulo = req.body["ipt-titulo"]
	let descricao = req.body["txt-descricao"]
	res.send(`<strong>Título: </strong>${ titulo }<br><strong>Descrição: </strong>${ descricao }`)
})

app.listen(4000, erro => {
	if (erro) {
		console.error("Erro durante a inicialização do servidor.")
	} else {
		console.log("App rodando.")
	}
})
