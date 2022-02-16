const knex = require('../database/connection')
const User = require('./User')

class PasswordToken {
	async create(email) {
		let user = await User.findByEmail(email)
		if (user) {
			try {
				let token = Date.now()
				await knex.insert({
								user_id: user.id,
								used: 0,
								token: token // Isso é um UUID
							})
							.table('passwordTokens')
				return { status: true, token }
			} catch (e) {
				console.log(e)
				return { status: false, error: e}
			}
		} else {
			return { status: false, error: 'O email passado não existe no banco de dados.' }
		}
	}

	async validate(token) {
		let result = await knex.select().where({ token }).table('passwordTokens')
		try {
			if (result.length > 0) {
				let token = result[0]

				if (token.used) {
					return { status: false }
				} else {
					return { status: true, token }
				}
			} else {
				return { status: false }
			}
		} catch (e) {
			console.log(e)
			return { status: false }
		}
	}

	async setUsed(token) {
		try {
			await knex.update({ used: 1 })
								.where({ token })
								.table('passwordTokens')
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new PasswordToken()
