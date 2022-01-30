const Reader = require("./components/Reader")

let reader = new Reader()
let basePath = `${ __dirname }/archives/original`

reader.read(`${ basePath }/cursos.csv`, error => {
	console.log(error)
})
