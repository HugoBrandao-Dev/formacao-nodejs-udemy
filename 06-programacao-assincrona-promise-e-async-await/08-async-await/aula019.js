function pegarUsuarios() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{nome: "Tobias de Oliveira", lang: "JavaScript"},
				{nome: "Dinorá de Oliveira", lang: "Python"},
				{nome: "Doralice Cruz", lang: "C#"}
			])
		}, 3000)
	})
}

/*
Um await DEVE estar dentro de uma função que esteja marcada com async
*/
async function getResults() {
	let usuarios = await pegarUsuarios()
	console.log(usuarios)
}

/*Código equivalente ao de cima
pegarUsuarios()
	.then(usuarios => {
		console.log(usuarios)
	})
*/
getResults()
