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
		} else {
			res.status(200)
			res.send("Tudo OK!")
		}
	}
}

module.exports = new UserController()
