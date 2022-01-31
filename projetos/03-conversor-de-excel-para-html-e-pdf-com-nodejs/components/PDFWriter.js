const pdf = require("html-pdf")

class PDFWriter {
	static writePDF(fileName, html) {
		// Converte o html em PDF
		pdf.create(html, {}).toFile(fileName, error => {
			if (error) {
				console.log(error)
			}
		})
	}
}

module.exports = PDFWriter