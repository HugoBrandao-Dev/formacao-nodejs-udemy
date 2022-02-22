class AppointmentFactory {
	build(simpleAppointment) {

		/*
		Pega o dia - 1 (não vem, exatamento, o dia cadastrado), que está armazenado
		na variável do tipo Date
		*/
		let day = simpleAppointment.date.getDate() + 1

		// Pega o mês, que está armazenado na variável do tipo Date
		let month = simpleAppointment.date.getMonth()

		// Pega o ano, que está armazenado na variável do tipo Date
		let year = simpleAppointment.date.getFullYear()

		// Pega as horas, que está armazenada na variável do tipo Time
		let hours = Number.parseInt(simpleAppointment.time.split(':')[0])

		// Pega os minutos, que está armazenada na variável do tipo Time
		let minutes = Number.parseInt(simpleAppointment.time.split(':')[1])

		/*
		Cria uma nova data com as informações passadas
		OBS: hours - 3, porque, ao passar pelo Date, a hora é convertida para o
		formato UTC
		*/
		let startDate = new Date(year, month, day, hours, minutes, 0, 0)

		let appointment = {
			id: simpleAppointment._id,
			title: `${ simpleAppointment.name } - ${ simpleAppointment.description }`,
			start: startDate,
			// Não é evento que tem finalização
			end: startDate,
			email: simpleAppointment.email,
			notified: simpleAppointment.notified
		}

		return appointment
	}
}

module.exports = new AppointmentFactory()
