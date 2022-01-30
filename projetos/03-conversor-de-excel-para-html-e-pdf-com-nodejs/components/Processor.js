class Processor {
	static process(data) {
		// Não alterar a sequência de \r\n
		let dataRows = data.split("\r\n")
		let dataColumns = []

		dataRows.forEach(row => {
			dataColumns.push(row.split(","))
		})
		return dataColumns
	}
}

module.exports = Processor
