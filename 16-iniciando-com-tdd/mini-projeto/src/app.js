const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.json({ success: true })
})

app.get('/corFavorita/:pessoa', (req, res) => {
	let pessoa = req.params.pessoa

	if (pessoa == 'tobias') {
		res.json({
			corFavorita: 'bege',
			favoriteColor: 'beige'
		})
	}
})

module.exports = app
