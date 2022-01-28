function enviarEmail(remetente, destinatario) {
	return new Promise((resolve, reject) => {
		let time = 4000
		console.log("Enviando email...")
		setTimeout(() => {
			let isError = false
			if (isError) {
				console.log("Falha no envio do email.")

				/*
				Geralmente recebe um parâmetro/mensagem de 
				erro, que será passado para o .catch()
				*/ 
				reject("OPS!! A fila de envio está cheia.")
			} else {
				console.log('Email enviado.')

				/*
				O resolve só aceita um parâmetro, que será 
				passado para o .then()
				*/ 
				resolve({remetente, destinatario, time})
			}
		}, time)
	})
}

enviarEmail("josias@gmail.com", "dinora@hotmail.com")
	.then(dados => {
		let { destinatario, remetente, time} = dados
		console.log(`${ destinatario } recebeu email de ${ remetente } em ${ time }ms.`)
	})
	.catch(error => {
		console.log(error)
	})