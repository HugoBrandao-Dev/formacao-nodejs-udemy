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
	res.send("Rodando...")
})

app.listen(4000, (req, res) => {
	console.log('Servidor rodando.')
})