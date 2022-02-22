const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
	name: String,
	email: String,
	cpf: String,
	description: String,
	date: Date,
	time: String,
	finished: {
		type: Boolean,
		default: false
	},
	notified: {
		type: Boolean,
		default: false
	}
})

module.exports = appointmentSchema
