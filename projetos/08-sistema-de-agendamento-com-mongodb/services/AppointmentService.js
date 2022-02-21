const appointment = require('../models/Appointment')
const mongoose = require('mongoose')
const AppointmentFactory = require('../factory/AppointmentFactory')

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

	async getAll(showFinished) {
		if (showFinished) {
			return await AppointmentModel.find()
		} else {
			let appointmentsRaw = await AppointmentModel.find({'finished': false})
			let formattedAppointments = []

			appointmentsRaw.forEach(appointment => {
				if (appointment.date) {
					formattedAppointments.push(AppointmentFactory.build(appointment))
				}
			})

			return formattedAppointments
		}
	}
}

module.exports = new AppointmentServices()
