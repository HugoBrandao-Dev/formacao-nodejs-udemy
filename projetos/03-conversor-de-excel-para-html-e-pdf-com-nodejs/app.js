const Reader = require("./components/Reader")

let reader = new Reader()
let basePath = `${ __dirname }/archives/original`

async function main() {
	let arquivo = await reader.read(`${ basePath }/cursos.csv`)
	console.log(arquivo)
}

main()
