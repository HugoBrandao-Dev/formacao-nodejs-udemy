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
			let isError = true
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
	try {
		let id = await getId()
		let email = await getEmail(id)
		await enviarEmail(email)
		console.log("Email enviado com sucesso.")
	} catch (error) {
		// Modificar o valor de isError, dentro da função enviarEmail()
		console.log("Erro no envio do email.")
	}
}

getResults()
