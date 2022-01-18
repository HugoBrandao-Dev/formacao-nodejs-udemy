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
	resposta.send("<h1>Bem vindo ao Guia do Programador.</h1>")
})

app.get("/blog", function(requisicao, resposta) {
	resposta.send("<h2>Bem vindo ao meu blog.</h2>")
})

app.get("/canal/youtube", function(requisicao, resposta) {
	resposta.send("<h3>Bem vindo ao meu canal no youtube.</h3>")
})

app.get("/usuario/:nome/:empresa/:cargo?", function(req, res) {
	let nome = req.params.nome
	let empresa = req.params.empresa
	let cargo = req.params.cargo

	let texto = ''
	if (cargo) {
		texto = `${ nome } trabalha na empresa ${ empresa } como ${ cargo }.`
	} else {
		texto = `${ nome } trabalha na empresa ${ empresa }.`
	}
	res.send(texto)
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
