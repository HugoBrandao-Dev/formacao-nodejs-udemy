class Table {
	constructor(archiveArray) {
		this.header = archiveArray[0]
		this.rows = archiveArray.splice(1, archiveArray.length)
	}

	// Pega a quantidade de linhas naquele exato momento
	get rowsCount() {
		return this.rows.length
	}

	get columnCount() {
		return this.header.length
	}
}

module.exports = Table
