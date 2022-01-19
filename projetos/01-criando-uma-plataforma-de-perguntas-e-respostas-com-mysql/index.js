const express = require("express")
const app = express()

// Informa que o view engine, com que o Express irá trabalhar, será o EJS.
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/:nome/:lang", (req, res) => {
	let nome = req.params.nome
	let lang = req.params.lang
	let mostrarMensagem = true

	let produtos = [
		{
			nome: "Cachorro Quente",
			preco: 15
		}, {
			nome: "Hamburguer",
			preco: 20
		},
		{
			nome: "Pizza",
			preco: 40
		}
	]

	res.render("index", {
		nome: nome,
		lang: lang,
		profissao: "Desenvolvedor Web",
		mostrarMensagem: mostrarMensagem,
		produtos: produtos
	})
})

app.listen(4000, erro => {
	if (erro) {
		console.error("Erro durante a inicialização do servidor.")
	} else {
		console.log("App rodando.")
	}
})
