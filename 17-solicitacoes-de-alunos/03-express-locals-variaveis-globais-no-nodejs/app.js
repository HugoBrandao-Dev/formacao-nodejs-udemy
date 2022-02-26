// Frameworks e bibliotecas
const express = require('express')
const app = express()

// Configurações
app.set('view engine', 'ejs')
app.use('/favicon.ico', express.static('images/favicon.ico'))

// Express local
app.locals = {
	// Usar letras maiúsculas para propriedades (convenção).
	NOME: 'Dinorá de Oliveira',
	FUNCIONARIOS: ['Tobias de Oliveira', 'Doralice Cruz', 'Josias Cruz'],
	MENU: ['INÍCIO', 'PRODUTOS', 'SERVIÇOS', 'CONTATO', 'SOBRE NÓS']
}

// Rotas
app.get('/', (req, res) => {
	res.render('index')
})

app.get('/funcionarios', (req, res) => {
	res.render('funcionarios')
})

module.exports = app