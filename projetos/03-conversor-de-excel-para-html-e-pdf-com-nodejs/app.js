const Reader = require("./components/Reader")
const Processor = require("./components/Processor")

let reader = new Reader()
let basePath = `${ __dirname }/archives/original`

async function main() {
	let archive = await reader.read(`${ basePath }/cursos.csv`)
	let archiveColumns = Processor.process(archive)
	console.log(archiveColumns)
}

main()
