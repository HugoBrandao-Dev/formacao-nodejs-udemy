const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User {
	async new(name, email, password) {
		try {

			/*
			Código original, vindo da documentação bcrypt (está em promise). Só
			transformamos em async/await

			bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
				// Store hash in your password DB.
			});
			*/
			let hash = await bcrypt.hash(password, 10)

			// role 0 = usuário comum.
			await knex.insert({ name, email, password: hash, role: 0 }).table('users')
		} catch (e) {
			console.log(e)
		}
	}

	async findEmail(email) {
		try {
			let result = await knex.select("*").from("users").where({ email })

			// O knex retorna ou um array vazio ou um array com o registro encontrado.
			if (result.length == 0) {
				return false
			} else {
				return true
			}
			console.log(result)
		} catch (e) {
			console.log(e)
			return false
		}
	}
}

module.exports = new User()
