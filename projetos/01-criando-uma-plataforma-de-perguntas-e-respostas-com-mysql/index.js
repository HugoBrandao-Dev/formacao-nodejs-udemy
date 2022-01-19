const express = require("express")
const app = express()

// Informa que o view engine, com que o Express irá trabalhar, será o EJS.
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
})

app.listen(4000, erro => {
	if (erro) {
		console.error("Erro durante a inicialização do servidor.")
	} else {
		console.log("App rodando.")
	}
})
