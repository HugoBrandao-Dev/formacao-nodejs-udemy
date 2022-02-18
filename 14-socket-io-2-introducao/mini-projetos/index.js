const express = require('express')
const app = express()

// Faz com que o express rode com base no servidor HTTP nativo do Node.
const http = require('http').createServer(app)

// Faz com que o aplicação Socket.IO rode junto ao servidor HTTP do Node.
const io = require('socket.io')(http)

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
	res.render('index')
})

// "socket" (função anonima) é uma instância do cliente (a conexão com o cliente).
io.on('connection', socket => {
	// console.log(socket)

	// O cliente, que se conecta, tem um id único.
	// console.log(socket.id)

	/* ========== CAPTURA DE EVENTOS PELO SOCKET.IO ========== */

	// Ficará escutando o 'boasvindas'
	socket.on('boasVindas', data => {
		// Só será mostrado no console do servidor
		console.log('EXECUTANDO EVENTO DE BOAS VINDAS!')
		console.log(data)
	})

	socket.on('palavra', data => {
		console.log(data)
		// Emite um evento do servidor para o cliente.
		socket.emit('resultado', `${ data } - Guia do Programador.`)
	})

	// Faz a disconexão
	socket.on('disconnect', data => {
		console.log(`${ socket.id } se disconectou.`)
	})
})

// Já que estamos utilizando o servidor HTTP nativo, não usar o app.listen.
http.listen(4000, () => {
	console.log('App rodando')
})