const appointment = require('../models/Appointment')
const mongoose = require('mongoose')
const AppointmentFactory = require('../factory/AppointmentFactory')

// Biblioteca node para o envio de email
const mailer = require('nodemailer')

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
			let appointmentsRaw = await AppointmentModel.find({ 'finished': false })
			let formattedAppointments = []

			appointmentsRaw.forEach(appointment => {
				if (appointment.date) {
					formattedAppointments.push(AppointmentFactory.build(appointment))
				}
			})

			return formattedAppointments
		}
	}

	async getAllById(id) {
		try {
			let eventAppointment = await AppointmentModel.findOne({ '_id': id })
			return eventAppointment
		} catch (e) {
			console.log(e)
		}
	}

	async finish(id) {
		try {
			await AppointmentModel.findByIdAndUpdate(id, {
				finished: true
			})
			return true
		} catch (e) {
			console.log(e)
			return false
		}
	}

	async search(query) {
		try {
			/*
			Faz a busca por documentos que tenham dados EXATAMENTE IGUAIS 
			ao query passado.
			*/
			let result = await AppointmentModel.find().or([
				{ email: query },
				{ cpf: query }
			])
			return result
		} catch (error) {
			console.log(error)
			return []
		}
	}

	/*
	OBS: VERIFICAR SE HÁ CLIENTES, CUJAS CONSULTAS ESTÃO MARCADAS PARA 
	MENOS (<=) DE UMA HORA, CADASTRADOS NO BANCO DE DADOS.
	*/
	async sendNotification() {
		try {
			let result = await this.getAll(false)

			// Conexão com o MailTrap
			const transporter = mailer.createTransport({
				// Todas as informações foram pegas do mailtrap
				host: 'smtp.mailtrap.io',
				port: 25,
				auth: {
					user: '669ebe13184c10',
					pass: '989cc029f14e5b'
				}
			})

			result.forEach(async (appo) => {
				// Pega a hora cadastrada, convertida em milissegundos
				let date = appo.start.getTime()
				let hourMili = 60 * 60 * 1000

				// Pega o horário atual do sistema, em milissegundos
				let gap = date - Date.now()

				/*
				Verifica se há uma hora ou menos de diferença e, em seguida, caso
				haja, será inviada um notificação para o cliente.
				*/
				if (gap <= hourMili) {
					if (!appo.notified) {
						transporter.sendMail({
							// Os valores DEVEM ter essas estruturas (esqueleto).
							from: 'Exemplo: <exemplo@exemplo.com>',
							to: appo.email,
							subject: 'Sua consulta vai acontecer em breve (1h), não se esqueça!!.'
						})
						await AppointmentModel.findByIdAndUpdate(appo.id, {
							notified: true
						})
					}
				}
			})
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new AppointmentServices()
