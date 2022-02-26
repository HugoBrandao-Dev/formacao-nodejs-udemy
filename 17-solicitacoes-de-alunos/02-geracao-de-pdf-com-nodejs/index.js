const htmlPDF = require('html-pdf')
const ejs = require('ejs')

let aluno = {
	nome: 'Tobias de Oliveira',
	email: 'tobias@gmail.com'
}

ejs.renderFile('./index.ejs', { aluno }, (error, html) => {
	if (error) {
		console.log(error)
	} else {
		// console.log(html)
		// Cria um arquivo PDF
		htmlPDF.create(html, {})
			.toFile('./files/meuPDF.pdf', (error, res) => {
				if (error) {
					console.log(`Erro na geração do PDF. ERROR: ${error}`)
				} else {
					console.log(res)
				}
			})

	}
})