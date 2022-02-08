const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')
app.set('trust proxy', 1) // trust first proxy
app.use(cookieParser("qwerjdl"))
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(flash())

app.get("/", (req, res) => {

	// Capturas dos flash-error passados
	let emailError = req.flash('emailError')
	let nomeError = req.flash('nomeError')
	let pontosError = req.flash('pontosError')

	/*
		Capturas dos valores de cada campo, para que
		eles estejam já preenchidos em caso de algum
		campo estar inválido. Antes, o usuário era
		redirecionado e obrigado a preencher todos os
		campos novamente.
	*/
	let email = req.flash('email')
	let nome = req.flash('nome')
	let pontos = req.flash('pontos')

	res.render('index', { email, emailError, nome, nomeError, pontos, pontosError })
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

		// Flash-sessions que atenderão a cada um dos erros
		req.flash('emailError', emailError)
		req.flash('nomeError', nomeError)
		req.flash('pontosError', pontosError)

		req.flash('email', iptEmail)
		req.flash('nome', iptNome)
		req.flash('pontos', iptPontos)

		// Para onde os flash-session serão enviados.
		res.redirect('/')
	} else {
		res.send('O formulário está OK!!!')
	}
})

app.listen(4000, (req, res) => {
	console.log('Servidor rodando.')
})