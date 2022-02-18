const express = require('express')
const app = express()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.set('view engine', 'ejs')



// Web Socket
io.on('connection', socket => {
	
	socket.on('disconnect', () => {
		console.log(`${ socket.id } se desconectou.`)
	})

	socket.on('msg', data => {

		// O socket é somente o cliente que enviou a mensagem.
		// socket.emit('showmsg', data)

		
		// Envia para todos que estão conectados, menos para quem enviou a mensagem.
		// socket.broadcast.emit('showmsg', data)

		/*
		É o servidor, neste caso todos que estão conectados ao servidor 
		verão mensagem enviada por um único usuário.
		*/
		io.emit('showmsg', data)
		
	})
	
})

// Rotas
app.get('/', (req, res) => {
	res.render('index')
})

http.listen(4000, () => {
	console.log('SERVIDOR RODANDO...')
})