// Biblioteca node.js para se trabalhar com arquivos
const fileSystem = require("fs")

// Nos permite utilizar uma função que transforma funcoes em promises.
const util = require("util")

class Reader {
	constructor() {
		this.reader = util.promisify(fileSystem.readFile)
	}

	async read(file) {
		try {
			// Como se fileSystem.readFile se tornasse this.reader
			return await this.reader(file, "UTF8")
		} catch (error) {
			return undefined
		}
		/*
		Sem utilizar o promisify
		fileSystem.readFile(file, "UTF8", (error, data) => {
			if (error) {
				console.log(error)
			} else {
				console.log(data)
			}
		})
		*/
	}
}

module.exports = Reader
