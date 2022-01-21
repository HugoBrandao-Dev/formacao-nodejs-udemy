const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

// Models
// Só de estar aqui, já vai criar a tabela no banco de dados.
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

// Database
connection.authenticate()
	.then(() => {
		console.log("O Banco de Dados foi conectado com SUCESSO.")
	})
	.catch(erro => {
		console.log(erro)
	})

// Informa que o view engine, com que o Express irá trabalhar, será o EJS.
app.set("view engine", "ejs")
app.use(express.static("public"))

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// Rotas
app.get("/", (req, res) => {

	/*
	Lista todas as pergutas da tabela "perguntas", mas só traz as informações
	"cruas" (raw), ou "importantes".
	*/
	Pergunta.findAll({
		raw: true,
		/*
		Faz com que o resultado seja ordenado com base no id, e de forma 
		decrescente. Também faz ordenação alfabética.
		ASC = Crescente
		OBS: VEJA QUE É UM ARRAY DENTRO DO OUTRO
		*/
		order: [
			["id", "DESC"]
		]
	}).then(perguntas => {
			// Renderiza index passando perguntas como parâmetros.
			res.render("index", { perguntas: perguntas })
		})
})

app.get("/perguntar", (req, res) => {
	res.render("perguntar")
})

app.post("/salvarPergunta", (req, res) => {
	let titulo = req.body["ipt-titulo"]
	let descricao = req.body["txt-descricao"]

	// Cria um novo registro no tabela perguntas
	Pergunta.create({
		titulo: titulo,
		descricao: descricao
		// Em caso de sucesso, rediciona o usuário para página inicial.
	}).then(() => { res.redirect("/") })
})

app.get("/pergunta/:id", (req, res) => {
	let id = req.params.id
	// Faz a busca pela primeira correspondência
	Pergunta.findOne({
		where: {
			// [CAMPO DE BUSCA]: [VALOR PARA SER BUSCADO]
			id: id
		}
	/*
	Caso não haja correspondência, será retornado undefined,
	mas NÃO DARÁ ERRO (não é capturado pelo catch).
	*/
	}).then(pergunta => {
		if (pergunta) {
			res.render("pergunta", { pergunta : pergunta })
		} else {
			res.redirect("/")
		}
	})
})

app.listen(4000, erro => {
	if (erro) {
		console.error("Erro durante a inicialização do servidor.")
	} else {
		console.log("App rodando.")
	}
})
