const express = require("express")

/*
É uma biblioteca do Node que transforma uma string
em um slug.
*/
const slugify = require("slugify")

/*
Com a utilização do router, o express detecta automaticamente
que este arquivo se trata de uma arquito de rota.
*/
const router = express.Router()

const Category = require("./category")

router.get("/categories", (req, res) => {
	res.send("Rota para categories")
})

router.get("/admin/categories/new", (req, res) => {
	res.render("admin/categories/new")
})

router.post("/categories/save", (req, res) => {
	let title = req.body["ipt-titulo"]
	if (title) {
		Category.create({
			title: title,
			slug: slugify(title)
		}).then(() => {
			res.redirect("/admin/categories")
		})
	} else {
		res.redirect("/admin/categories/new")
	}
})

router.get("/admin/categories", (req, res) => {
	Category.findAll().then(categories => {
		res.render("admin/categories/index", {categories: categories})
	})
})

router.post("/categories/delete", (req, res) => {
	let id = req.body["ipt-id"]
	if (id) {
		if (!isNaN(id)) {
				// Método para deletar um registro do banco de dados
				Category.destroy({
					where: {
						id: id
					}
				}).then(() => {
					res.redirect("/admin/categories")
				})
		} else { // Se não foi um número
			res.redirect("/admin/categories")
		}
	} else { // Se for Null
		res.redirect("/admin/categories")
	}
})

module.exports = router