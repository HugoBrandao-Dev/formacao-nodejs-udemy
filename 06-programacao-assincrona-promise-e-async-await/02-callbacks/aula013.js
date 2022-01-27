/*
Callback é uma função a ser executada quando uma função assíncrona
terminar de executar.
*/
function enviarEmail(remetente, destinatario, mensagem, callback) {
	setTimeout(() => {
		console.log(`
		Destinatário: ${ destinatario }.
		=================================
		 ${ mensagem }
		=================================
		Remetente: ${ remetente }.
		`)
		callback()
	}, 5000)
}

let destinatario = 'Tobias de Oliveira'
let remetente = 'Doralice Cruz'
let mensagem = `Seja bem vindo ao nosso fórum. Para confirmar sua inscrição, clique no link abaixo.`

function funcaoCallback() {
	console.log("O destinatário recebeu a mensagem.")
}

console.log("Enviando mensagem...")
enviarEmail(remetente, destinatario, mensagem, funcaoCallback)
