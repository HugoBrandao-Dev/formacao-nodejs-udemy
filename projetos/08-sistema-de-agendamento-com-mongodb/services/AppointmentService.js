const appointment = require('../models/Appointment')
const mongoose = require('mongoose')

const AppointmentModel = mongoose.model('Appointment', appointment)

class AppointmentServices {
	async create(name, email, cpf, description, date, time) {
		const appointmentOBJ = new AppointmentModel({
			name,
			email,
			cpf,
			description,
			date,
			time
		})

		try {
			await appointmentOBJ.save()
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
}

module.exports = new AppointmentServices()