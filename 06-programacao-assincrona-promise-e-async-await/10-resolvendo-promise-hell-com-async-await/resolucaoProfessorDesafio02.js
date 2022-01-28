function getId() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(12)
		}, 1500)
	})
}

function getEmail(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`[${ id }] - tobias@yahoo.com`)
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

async function getResults() {
	let id = await getId()
	let email = await getEmail(id)
	enviarEmail("josias_cruz@bol.com", email)
		.then(() => {
			console.log("Email enviado.")
		})
		.catch(error => {
			console.log(error)
		})
}

getResults()
