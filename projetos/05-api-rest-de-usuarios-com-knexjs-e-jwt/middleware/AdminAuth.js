const jwt = require('jsonwebtoken')

let secret = 'fwjfjpwejvnnvjknkkmcmksldm'

module.exports = function(req, res, next) {
	const authToken = req.headers['authorization']

	if (authToken) {
		const bearer = authToken.split(' ')
		let token = bearer[1]
		try {
			let decoded = jwt.verify(token, secret)

			/*
			Somente usuário que tiverem perfil de Administrador, poderão acessar
			determinadas áreas.
			*/
			if (decoded.role == 1) {
				next()
			} else {
				res.status(401)
				res.json({ error: 'Usuário não autorizado.' })
			}
		} catch (e) {
			console.log(e)
			res.status(500)
			res.json({ error: e })
		}
	} else {
		res.status(403)
		res.json({ error: 'Usuário não autenticado.' })
	}
}
