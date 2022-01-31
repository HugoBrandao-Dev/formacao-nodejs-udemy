const Reader = require("./components/Reader")
const Processor = require("./components/Processor")
const Table = require("./components/Table")

let reader = new Reader()
let basePath = `${ __dirname }/archives/original`

async function main() {
	let archive = await reader.read(`${ basePath }/cursos.csv`)
	let archiveColumns = Processor.process(archive)
	let table = new Table(archiveColumns)

	// Métodos get são chamados como atributos
	console.log(table.rowsCount)
	console.log(table.columnCount)
}

main()
