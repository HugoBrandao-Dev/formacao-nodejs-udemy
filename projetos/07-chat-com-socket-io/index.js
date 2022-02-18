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
		socket.emit('showmsg', data)
	})
	
})

// Rotas
app.get('/', (req, res) => {
	res.render('index')
})

http.listen(4000, () => {
	console.log('SERVIDOR RODANDO...')
})