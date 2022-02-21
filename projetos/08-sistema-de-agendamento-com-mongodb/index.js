const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const AppointmentService = require('./services/AppointmentService')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/agendamento')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/cadastro', (req, res) => {
	res.render('create')
})

app.post('/create', async (req, res) => {
	let name = req.body.iptName
	let email = req.body.iptEmail
	let cpf = req.body.iptCPF
	let description = req.body.textDescription
	let date = req.body.iptDate
	let time = req.body.iptTime

	let status = await AppointmentService.create(name, email, cpf, description, date, time)
	if (status) {
		res.redirect('/')
	} else {
		res.send('Falha no cadastro da consulta.')
	}
})

app.get('/calendar', async (req, res) => {
	let appointments = await AppointmentService.getAll(false)
	res.json(appointments)
})

app.get('/appointment/:id', async (req, res) => {
	let id = req.params.id
	let eventAppointment = await AppointmentService.getAllById(id)

	res.render('appointment', { appointment: eventAppointment })
})

app.post('/finish', async (req, res) => {
	let id = req.body.iptId
	let result = await AppointmentService.finish(id)
	if (result) {
		res.redirect('/')
	} else {
		res.redirect(`/appointment/${ id }`)
	}
})

app.listen(4000, () => {
	console.log('Servidor rodando...')
})
