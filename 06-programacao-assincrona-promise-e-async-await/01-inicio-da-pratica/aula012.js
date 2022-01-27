function enviarEmail(remetente, destinatario, corpo) {

	// O setTimeout é assíncrono por natureza.
	setTimeout(() => {
		console.log(`
		Destinatário: ${ destinatario }
		===============================
		${ corpo }
		===============================
		Remetente: ${ remetente }
		`)
	}, 8000)
}

let remetente = 'josias@gmail.com'
let destinatario = 'dinora@hotmail.com'
let mensagem = 'Olá, por acaso você estaria interessada em um emprego de programadora?'

console.log("Email sendo enviado...")

// Essa linha será executada/mostrada depois de todas as outras.
enviarEmail(remetente, destinatario, mensagem)

console.log("...")