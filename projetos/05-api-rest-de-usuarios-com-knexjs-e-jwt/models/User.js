const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User {
	async findAll() {
		try {
			let result = await knex.select(['id', 'name', 'email', 'role']).table('users')
			return result
		} catch (e) {
			return []
		}
	}

	async findById(id) {
		try {
			let user = await knex.select(['name', 'email', 'role'])
														.where({id: id})
														.table('users')
			return user.length ? user[0] : undefined
		} catch (e) {
			console.log(e)
			return []
		} finally {

		}
	}

	async update(id, name, email, role) {
		let user = await this.findById(id)
		if (user) {
				let editUser = {}

				if (email != undefined)  {
					let result = await this.findEmail(email)

					// Verifica se o novo email passado já exite no banco de dados.
					if (result == false) {
						return { status: false, error: "O email já exite."}
					} else {
						editUser.email = email
					}
				}
				if (name != undefined) {
					editUser.name = name
				}
				if (role != undefined) {
					editUser.role = role
				}

				try {
					await knex.update({ ...editUser })
										.where({id: id})
										.table('users')
					return { status: true }
				} catch (e) {
					console.log(e)
					return { status: false, error: e }
				}
				// await knex.where({ id })
				// .update({ name, email, role })
				// .table('users')
		} else {
			return { status: false, error: "O usuário não existe." }
		}
	}

	async delete(id) {
		let result = await this.findById(id)
		if (result) {
			try {
				await knex.delete().where({id: id}).table('users')
				return { status: true }
			} catch (e) {
				console.log(e)
				return { status: false, error: 'Erro interno durante a deleção do usuário.' }
			}
		} else {
			return { status: false, error: 'O usuário não foi encontrado.' }
		}
	}

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

	/*
	Este método somente diz se "tem um email cadastrado" (true ou false), mas não
	retorna qual.
	*/
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

	// Este método retorna todas as informações do usuário que é dono o email.
	async findByEmail(email) {
		try {
			let result = await knex.select(['id', 'name', 'email', 'role'])
															.where({ email: email })
															.table('users')
			if (result.length === 1) {
				return result[0]
			} else {
				return undefined
			}
		} catch (e) {
			console.log(e)
			return undefined
		}
	}
}

module.exports = new User()
