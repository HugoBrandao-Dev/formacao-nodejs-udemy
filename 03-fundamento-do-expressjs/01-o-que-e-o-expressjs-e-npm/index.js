// Importamos o express
const express = require("express")

// Iniciamos o framework na constante app.
const app = express()

// Devemos informar para qual URL a rota aponta e O QUE ELA FAZ.
app.get("/", function(requisicao, resposta) {

	/*
	Resposta para as requisicoes feitas na rota "/", só pode ser enviada uma única
	vez (não deve haver mais de um .send)
	*/
	resposta.send("Bem vindo ao Guia do Programador.")
})

app.get("/blog", function(requisicao, resposta) {
	resposta.send("Bem vindo ao meu blog")
})

app.get("/canal/youtube", function(requisicao, resposta) {
	resposta.send("Bem vindo ao meu canal no youtube.")
})

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
