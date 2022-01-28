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

// Nenhuma outra função depende do resultado da getId()
getId()
	.then(id => {
		console.log(id)
	})


async function getResults() {
	
	// O enviarEmail depende de getEmail(), devendo esperar seu resultado
	let email = await getEmail()
	let enviar = await enviarEmail("josias_curz@bol.com", email)
	console.log(email)
	console.log(enviar)
}

getResults()
