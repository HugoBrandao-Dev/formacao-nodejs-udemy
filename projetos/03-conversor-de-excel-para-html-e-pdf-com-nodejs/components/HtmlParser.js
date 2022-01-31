const ejs = require("ejs")

class HtmlParser {
	static async parse(table) {
		return await ejs.renderFile("projetos/03-conversor-de-excel-para-html-e-pdf-com-nodejs/views/table.ejs", {
			header: table.header,
			rows: table.rows
		})
	}
}

module.exports = HtmlParser