class Table {
	constructor(archiveArray) {
		this.header = archiveArray[0]
		this.rows = archiveArray.splice(1, archiveArray.length)
	}
}

module.exports = Table
