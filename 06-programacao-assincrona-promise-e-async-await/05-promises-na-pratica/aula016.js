function enviarEmail(rementente, destinatario, mensagem) {
	return new Promise((resolve, reject) => {
		console.log("Email sendo enviado...")
		setTimeout(() => {
			let isError = true
			if (isError) {
				reject()
			} else {
				console.log(`
				Para: ${ destinatario }
				============================
				${ mensagem }
				============================
				De: ${ rementente }
				`)
				resolve()
			}
		}, 5000)
	})
}

let remetente = "josias@gmail.com"
let destinatario = "doralice@yahoo.com"
let corpo = `Bom dia, a reunião de hoje foi remarcada para amanhã de tarde.`

enviarEmail(remetente, destinatario, corpo)
	.then(() => {
		console.log("O Email foi enviado com sucesso.")
	})
	.catch(() => {
		console.log("Falha no envio do email.")
	})