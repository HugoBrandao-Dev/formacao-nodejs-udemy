const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
	name: String,
	email: String,
	cpf: String,
	description: String,
	data: Date,
	time: String,
	finished: {
		type: Boolean,
		default: false
	}
})

module.exports = appointmentSchema