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
				User.findAll()
					.then(users => {
						res.redirect("/admin/users")
					})
			})
			.catch(error => {
				res.redirect("/")
			})
		} else {
			res.redirect("/admin/users/create")
		}
	})
})

router.get("/login", (req, res) => {
	res.render("admin/users/login")
})

router.post("/authenticate", (req, res) => {
	let email = req.body["ipt-email"]
	let password = req.body["ipt-password"]

	// Verifica se há um usuário com o login
	User.findOne({
		where: {
			email: email
		}
	}).then(user => {
		if (user) {

			// Verifica se as senhas conferem, comparando a digita com a armazenada.
			let isCorrect = bcrypt.compareSync(password, user.password)
			if (isCorrect) {
				// Cria uma sessão e salva os dados informados no formulário.
				req.session.user = {
					id: user.id,
					email: user.email
				}

				// Busca uma sessao e retorna os dados salvos.
				res.redirect("/admin/articles")
			} else {
				res.redirect("/login")
			}
		} else {
			res.redirect("/login")
		}
	})
})

router.post("/admin/users/delete", (req, res) => {
	let id = req.body["ipt-id"]
	User.destroy({
		where: {
			id: id
		}
	}).then(() => {
		User.findAll()
			.then(users => {
				res.redirect("/admin/users")
			})
	})
})

router.get("/admin/users/edit/:id", (req, res) => {
	let id = req.params.id

	User.findOne({
		where: {
			id: id
		}
	}).then(user => {
		if (user) {
			res.render("admin/users/edit", { user: user })
		} else {
			res.redirect("/admin/users")
		}
	})
})

router.post("/users/update", (req, res) => {
	let id = req.body["ipt-id"]
	let newEmail = req.body["ipt-new-email"]
	let newPassword = req.body["ipt-new-password"]

	let salt = bcrypt.genSaltSync(5)
	let hash = bcrypt.hashSync(newPassword, salt)

	User.update({
		email: newEmail,
		password: hash,
	},{
		where: { id: id }
	}).then(() => {
		res.redirect("/admin/users")
	})
})

router.get("/logout", (req, res) => {
	req.session.user = undefined
	res.redirect("/")
})

module.exports = router
