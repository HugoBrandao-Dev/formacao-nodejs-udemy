const express = require("express")
const router = express.Router()
const User = require('./User')

/*
Biblioteca para a geração de Hash para senha que serão
armazenadas no banco de dados.
*/
const bcrypt = require("bcryptjs")

router.get("/admin/users", (req, res) => {
	User.findAll()
		.then(users => {
			res.render("admin/users/index", { users: users })
		})
})

router.get("/admin/users/create", (req, res) => {
	res.render("admin/users/create")
})

router.post("/users/create", (req, res) => {
	let email = req.body["ipt-email"]
	let password = req.body["ipt-password"]

	User.findOne({
		where: {
			email:email
		}
	}).then((user) => {
		// Se o user não foi encontrado (undefined), significa que pode ser usado.
		if (!user) {

			// Número "tempero" para gerar a hash
			let salt = bcrypt.genSaltSync(10)

			// Gera uma hash
			let hash = bcrypt.hashSync(password, salt)

			User.create({
				email: email,
				password: hash
			}).then(() => {
				res.redirect("/")
			})
			.catch(error => {
				res.redirect("/")
			})
		} else {
			res.redirect("/admin/users/create")
		}
	})
})

module.exports = router
