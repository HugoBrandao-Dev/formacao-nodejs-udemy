// Biblioteca node.js para se trabalhar com arquivos
const fileSystem = require("fs")

// Nos permite utilizar uma função que transforma funcoes em promises.
const util = require("util")

class Writer {
	constructor() {
		this.writer = util.promisify(fileSystem.writeFile)
	}

	async write(fileName, data) {
		try {
			await this.writer(fileName, data)
			return true
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = Writer