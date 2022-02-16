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
}

module.exports = new PasswordToken()
