const fileSystem = require("fs")

class Reader {
	read(file) {
		fileSystem.readFile(file, "UTF8", (error, data) => {
			if (error) {
				console.log(error)
			} else {
				console.log(data)
			}
		})
	}
}

module.exports = Reader
