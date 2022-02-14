const User = require('../models/User')

class UserController {
	async index(req, res) {}

	async create(req, res) {
		let { name, email, password } = req.body

		if (!name || !email || !password) {
			res.status(400)
			if (!name) {
				res.json({error: 'Nome inválido.'})
			} else if (!email) {
				res.json({error: 'Email inválido.'})
			} else {
				res.json({error: 'Senha inválida.'})
			}

			// Para (parar) uma requisição
			return
		} else {

			// O findEmail retorna true ou false se houver ou não um registro com o email.
			let emailExists = await User.findEmail(email)
			if (emailExists) {
				res.status(406)
				res.json({error: 'Email já cadastrado.'})
			} else {
				await User.new(name, email, password)
				res.status(200)
				res.send("Tudo OK!")
			}
		}
	}
}

module.exports = new UserController()
