function enviarEmail(remetente, destinatario, mensagem, callback) {
	let time = 5000
	setTimeout(() => {
		let isError = true
		if (isError) {
			callback(time, 'Falha no envio do email.')
		} else {
			console.log(`
			Para: ${ destinatario }
			============================
			${ mensagem }
			============================
			De: ${ remetente }
			`)
			callback(time)
		}
	}, 5000)
}

function funcaoCallback(time, error) {
	if (!error) {
		console.log('Email enviado com SUCESSO!!')
	} else {
		console.log(error)
	}
	console.log(`${ time } ms.`)
}

enviarEmail('Josias Cruz', 'Tobias de Oliveira', 'Boa tarde.', funcaoCallback)