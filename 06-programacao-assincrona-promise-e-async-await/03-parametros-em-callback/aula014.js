function enviarEmail(destinatario, remetente, mensagem, callback) {
	let time = 5000
	setTimeout(() => {
		console.log(`
		Para: ${ destinatario }
		=========================
		 ${ mensagem }
		=========================
		De: ${ remetente }
		`)
		callback('200', time)
	}, time)
}

let destinatario = 'Doralice Cruz'
let remetente = 'Dinorá de Oliveira'
let mensagem = `Bom dia Sra. ${ destinatario }, estou entrando em contato para avisar que a reunião de hoje a tarde foi cancelada.`
function funcaoCallback(status, time) {
	console.log(`
	Status: ${ status }
	Tempo de execução: ${ time }
	`)
}

console.log('Enviando email...')
enviarEmail(destinatario, remetente, mensagem, funcaoCallback)