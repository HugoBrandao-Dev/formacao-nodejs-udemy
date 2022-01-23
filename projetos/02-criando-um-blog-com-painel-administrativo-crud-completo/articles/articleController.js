const express = require("express")
const router = express.Router()
const Category = require("../categories/category")
const Article = require("./article")
const sligify = require("slugify")
const { default: slugify } = require("slugify")

router.get("/articles", (req, res) => {
	res.send("Rota para articles")
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
	})
})

module.exports = router