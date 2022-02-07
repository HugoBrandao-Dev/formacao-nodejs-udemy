const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')

app.set('view engine', 'ejs')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(flash())

app.get("/", (req, res) => {
	console.log('Está rodando!!')
	res.render('index')
})

app.post("/form", (req, res) => {
	let { iptEmail, iptNome, iptPontos } = req.body

	let emailError = null
	let nomeError = null
	let pontosError = null

	if (!iptEmail) {
		emailError = 'O e-mail não pode estar vazio.'
	}
	
	if (!iptNome) {
		nomeError = 'O nome não pode estar vazio.'
	}

	if(!iptPontos) {
		pontosError = 'Os pontos não pode estar vazio.'
	} else {
		if (iptPontos < 20) {
			pontosError = 'A quantidade de pontos não pode ser menor que 20.'
		}
	}

	if (emailError || nomeError || pontosError) {
		res.redirect('/')
	} else {
		res.send('O formulário está OK!!!')
	}
})

app.listen(4000, (req, res) => {
	console.log('Servidor rodando.')
})