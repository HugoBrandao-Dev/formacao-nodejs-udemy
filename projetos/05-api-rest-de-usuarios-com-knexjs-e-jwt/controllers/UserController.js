const User = require('../models/User')
const PasswordToken = require('../models/PasswordToken')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let secret = 'fwjfjpwejvnnvjknkkmcmksldm'

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

	async remove(req, res) {
		let id = req.params.id
		let result = await User.delete(id)
		if (result.status) {
			res.status(200)
			res.send('Usuário deletado com sucesso.')
		} else {
			res.status(406)
			res.json({ error: result.error })
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
				let result = await User.new(name, email, password)
				if (result.status) {
					res.status(200)
					res.send("Tudo OK!")
				} else {
					res.status(500)
					res.send(result.error)
				}
			}
		}
	}

	async recoverPassword(req, res) {
		let email = req.body.email
		let result = await PasswordToken.create(email)
		if (result.status) {
			res.status(200)
			console.log(result.token.toString())
			res.send(result.token.toString())
		} else {
			res.status(406)
			res.json({ error: result.error })
		}
	}

	async changePassword(req, res) {
		let token = req.body.token
		let password = req.body.password

		let result = await PasswordToken.validate(token)
		console.log(result)

		if (result.status) {

			let isChanged = await User.changePassword(password, result.token.user_id, result.token.token)
			if (isChanged.status) {
				res.status(200)
				res.send('Senha alterada com sucesso.')
			} else {
				res.status(500)
				res.json({ error: isChanged.error })
			}

		} else {
			res.status(406)
			res.send('Token inválido.')
		}
	}

	async login(req, res) {
		let { email, password } = req.body
		let user = await User.findByEmail(email)
		if (user) {
			let result = await bcrypt.compare(password, user.password)
			if (result) {

				// Gera um token
				let token = jwt.sign({ email: user.email, role: user.role}, secret)

				res.status(200)
				res.json({ token })
			} else {
				res.status(406)
				res.json({ error: 'Senha inválida.'})
			}
		} else {
			res.status(404)
			res.json({ error: 'Usuário não encontrado.' })
		}
	}
}

module.exports = new UserController()
