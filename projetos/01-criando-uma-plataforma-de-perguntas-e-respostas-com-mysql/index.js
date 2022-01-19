const express = require("express")
const app = express()

// Informa que o view engine, com que o Express irá trabalhar, será o EJS.
app.set("view engine", "ejs")

app.get("/:nome/:lang", (req, res) => {
	let nome = req.params.nome
	let lang = req.params.lang
	let mostrarMensagem = true
	res.render("index", {
		nome: nome,
		lang: lang,
		profissao: "Desenvolvedor Web",
		mostrarMensagem: mostrarMensagem
	})
})

app.listen(4000, erro => {
	if (erro) {
		console.error("Erro durante a inicialização do servidor.")
	} else {
		console.log("App rodando.")
	}
})
