const Reader = require("./components/Reader")
const Processor = require("./components/Processor")
const Writer = require("./components/Writer")
const Table = require("./components/Table")
const HtmlParser = require("./components/HtmlParser")
const PDFWriter = require("./components/PDFWriter")

let reader = new Reader()
let writer = new Writer()
let originalBasePath = `${ __dirname }/archives/original`
let convertedBasePath = `${ __dirname }/archives/converted`

async function main() {
	let archive = await reader.read(`${ originalBasePath }/cursos.csv`)
	let archiveColumns = Processor.process(archive)
	let table = new Table(archiveColumns)
	let html = await HtmlParser.parse(table)

	writer.write(`${ convertedBasePath }/${ Date.now() }.html`, html)

	// Demora um pouco para gerar o PDF
	PDFWriter.writePDF(`${ convertedBasePath }/${ Date.now() }.pdf`, html)
}

main()
