// Importamos o express
const express = require("express")

// Iniciamos o framework na constante app.
const app = express()

/*
listen recebe a porta que atenderá as requisições e uma funcao, que tem um
parâmetro erro
*/
app.listen(4000, function(erro) {
	if (erro) {
		console.error('Ocorreu um erro')
	} else {
		console.log('Servidor iniciando com sucesso.')
	}
})
