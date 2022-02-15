const User = require('../models/User')

class UserController {
	async index(req, res) {
		let users = await User.findAll()
		res.status(200)
		res.json(users)
	}

	async findUser(req, res) {
		let id = req.params.id
		let user = await User.findById(id)
		if (user) {
			res.status(200)
			res.json(user)
		} else {
			res.status(404)
			res.json({ error: 'Usuário não encontrado.' })
		}
	}

	async edit(req, res) {
		let { id, name, email, role } = req.body
		let result = await User.update(id, name, email, role)
		if (result) {
			if (result.status) {
				res.status(200)
				res.send("Usuário editado com sucesso.")
			} else {
				res.status(406)
				res.json({ error: result.error })
			}
		} else {
			res.status(500)
			res.json({ error: 'Erro no servidor.' })
		}
	}

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
