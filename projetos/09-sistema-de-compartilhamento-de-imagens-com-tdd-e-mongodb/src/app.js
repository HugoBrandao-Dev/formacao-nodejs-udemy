const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:4000/guiapics')
	.then(() => {
		// console.log(res)
	})
	.catch(error => {
		console.log(error)
	})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.json({})
})

module.exports = app