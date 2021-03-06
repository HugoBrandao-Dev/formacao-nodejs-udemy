const express = require("express")
const router = express.Router()
const Category = require("../categories/category")
const Article = require("./article")
const slugify = require("slugify")

// Middleware que verifica se usuário está logado
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/articles", adminAuth, (req, res) => {
	/*
	Permite que haja um join entre a tabela categories e a articles,
	devido a tabela articles ter uma Foreign Key vinda do categories
	*/
	Article.findAll({ include: [{ model: Category }] })
		.then(articles => {
			res.render("admin/articles/index", { articles: articles })
		})
})

router.get("/admin/articles/new", adminAuth, (req, res) => {
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

router.get("/admin/articles/edit/:id", adminAuth, (req, res) => {
	let id = req.params.id
	Article.findByPk(id)
		.then(article => {
			if (article) {
				Category.findAll()
					.then(categories => {
						res.render("admin/articles/edit", {
							article: article,
							categories: categories
						})
					})
			} else {
				res.redirect("/")
			}
		})
		.catch(error => {
			res.redirect("/")
		})
})

router.post("/articles/update", (req, res) => {
	let id = req.body["ipt-id"]
	let title = req.body["ipt-title"]
	let body = req.body["txt-body"]
	let categoryId = req.body["slt-category"]

	Article.update({
		title: title,
		body: body,
		slug: slugify(title),
		categoryId: categoryId,
	}, {
		where: {
			id: id
		}
	}).then(() => {
		res.redirect("/admin/articles")
	})
	.catch(error => {
		res.redirect("/")
	})
})

router.get("/articles/page/:num", (req, res) => {
	let page = req.params.num
	let offset = null

	if (page) {
		if (!isNaN(page)) {
			if (page == 1) {
				offset = 0
			} else {
				/*
				4 é arbitrário, e representa a quantidade de artigos a serem exibidos
				por página.
				Tiramos 1 para que, quando foi multiplicado por 4, dê um resultado igual
				ou maior do que 4.
				PÁGINA_URL       OFFSET
				(2)-1 = 1 x 4      A partir do 4
				(3)-1 = 2 x 4      A partir do 8
				*/
				offset = (parseInt(page) - 1) * 4
			}
		}
	}

	/*
	Busca todos os artigos, dentro de um ARRAY, e também tras a contagem, um
	NÚMERO, da quantidade total de artigos, e COLOCA AMBOS DENTRO DE UM OBJETO.
	*/
	Article.findAndCountAll({
		/*
		Retorna dados a partir de um determinado valor. Neste caso, o offset vai
		depender da página na qual o usuário se encontra.
		*/
		offset: offset,

		// Define um limite de dados as serem buscados.
		limit: 4,
		order: [
			["id", "DESC"]
		]
	})
		.then(articles => {
			let hasNext = offset + 4 <= articles.count

			let result = {
				page: Number.parseInt(page),
				articles: articles,
				hasNext: hasNext
			}

			// Devolve um JSON (só para um breve debug)
			// res.json(result)

			Category.findAll()
				.then(categories => {
					res.render("admin/articles/page", {
						result: result,
						categories: categories
					})
				})
		})
})

module.exports = router
