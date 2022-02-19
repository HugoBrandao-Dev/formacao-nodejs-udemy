const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost.com/27017/agendamento')

app.get('/', (req, res) => {
	res.send('Oi!!')
})

app.get('/cadastro', (req, res) => {
	res.render('create')
})

app.listen(4000, () => {
	console.log('Servidor rodando...')
})