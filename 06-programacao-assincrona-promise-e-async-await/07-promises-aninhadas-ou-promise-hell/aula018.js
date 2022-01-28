function getId() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(12)
		}, 1500)
	})
}

function getEmail() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("tobias@yahoo.com")
		}, 1500)
	})
}

function enviarEmail(remetente, destinatario) {
	return new Promise((resolve, reject) => {
		console.log("Enviando email...")
		let time = 3000
		setTimeout(() => {
			let isError = false
			if (isError) {
				reject("Falha no envio do email.")
			} else {
				resolve({
					remetente,
					destinatario,
					time
				})
			}
		}, time)
	})
}

// Promises aninhadas ou Promise Hell
getId()
	.then(id => {
		getEmail()
			.then(email => {
				enviarEmail("doralice@gmail.com", email)
					.then(resultado => {
						let { remetente, destinatario, time } = resultado
						console.log(`${ remetente } enviou uma mensagem para ${ destinatario } em ${ time }ms.`)
					})
					.catch(error => {
						console.log(error)
					})
			})
	})


