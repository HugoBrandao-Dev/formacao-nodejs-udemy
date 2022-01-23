const express = require("express")
const router = express.Router()
const Category = require("../categories/category")
const Article = require("./article")
const slugify = require("slugify")

router.get("/admin/articles", (req, res) => {
	/*
	Permite que haja um join entre a tabela categories e a articles,
	devido a tabela articles ter uma Foreign Key vinda do categories
	*/
	Article.findAll({ include: [{ model: Category }] })
		.then(articles => {
			res.render("admin/articles/index", { articles: articles })
		})
})

router.get("/admin/articles/new", (req, res) => {
	/*
	Passamos as categorias cadastradas no banco, para que
	possamos criar um dropdown delas.
	*/
	Category.findAll({})
		.then((categories) => {
			res.render("admin/articles/new", { categories: categories })
		})
})

router.post("/articles/save", (req, res) => {
	let title = req.body["ipt-title"]
	let body = req.body["txt-body"]
	let categoryId = req.body["slt-category"]
	Article.create({
		title: title,
		slug: slugify(title),
		body: body,
		categoryId: categoryId
	}).then(() => {
		res.redirect("/admin/articles")
	})
})

router.post("/articles/delete", (req, res) => {
	let id = req.body["ipt-id"]
	if (id) {
		if (!isNaN(id)) {
				// Método para deletar um registro do banco de dados
				Article.destroy({
					where: {
						id: id
					}
				}).then(() => {
					res.redirect("/admin/articles")
				})
		} else { // Se não foi um número
			res.redirect("/admin/articles")
		}
	} else { // Se for Null
		res.redirect("/admin/articles")
	}
})

module.exports = router
