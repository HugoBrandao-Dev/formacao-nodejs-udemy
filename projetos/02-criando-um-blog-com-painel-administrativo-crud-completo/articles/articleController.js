const express = require("express")
const router = express.Router()
const Category = require("../categories/category")

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

module.exports = router