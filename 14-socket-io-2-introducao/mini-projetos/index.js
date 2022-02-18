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

// "socket" (função anonima) é uma instância do cliente.
io.on('connection', socket => {
	console.log(socket)

	// O cliente, que se conecta, tem um id único.
	console.log(socket.id)
})

// Já que estamos utilizando o servidor HTTP nativo, não usar o app.listen.
http.listen(4000, () => {
	console.log('App rodando')
})