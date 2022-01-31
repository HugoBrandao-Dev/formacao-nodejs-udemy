const Reader = require("./components/Reader")
const Processor = require("./components/Processor")
const Table = require("./components/Table")

let reader = new Reader()
let basePath = `${ __dirname }/archives/original`

async function main() {
	let archive = await reader.read(`${ basePath }/cursos.csv`)
	let archiveColumns = Processor.process(archive)
	let table = new Table(archiveColumns)
	console.log(table.header)
	console.log(table.rows)
}

main()
