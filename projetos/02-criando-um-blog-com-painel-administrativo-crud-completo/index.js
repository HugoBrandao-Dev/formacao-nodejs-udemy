/* ########## IMPORTAÇÕES ########## */

// Express
const express = require("express")
const app = express()

// Body-parser
const bodyParser = require("body-parser")

// Conexão com o banco de dados
const connection = require("./database/database")

// Categories
const categoriesController = require("./categories/categoriesController")
const categoryModel = require("./categories/category")

// Articles
const articlesController = require("./articles/articleController")
const articleModel = require("./articles/article")

/* ########## CONFIGURAÇÕES ########## */

// Configurando a view engine do express para usar EJS
app.set("view engine", "ejs")

// Habilitando arquivos estáticos
app.use(express.static("public"))

// Decodificador de dados formulários e de JSON
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Conectando com o banco de dados
connection.authenticate()
	.then(() => {
		console.log("Conexão com o banco de dados feita com SUCESSO.")
	})
	.catch(error => {
		console.log(error)
	})

/*
Utiliza categories na rota
"/" significa SEM PREFIXO
*/
app.use("/", categoriesController)

// Utiliza articles na rota
app.use("/", articlesController)

/* ########## ROTAS ########## */

app.get("/", (req, res) => {
	articleModel.findAll({
		order: [
			['id', 'DESC']
		]
	}).then(articles => {
			categoryModel.findAll({})
				.then(categories => {
					res.render("index", { articles: articles, categories: categories})
				})
		})
})

app.get("/:slug", (req, res) => {
	let slug = req.params.slug
	articleModel.findOne({
		where: {
			slug: slug
		}
	}).then(article => {
		if (article) {
			categoryModel.findAll({})
				.then(categories => {
					res.render("article", { article: article, categories: categories})
				})
		} else {
			res.redirect("/")
		}
	})
	.catch(error => {
		res.redirect("/")
	})
})

// Configuração da porta
app.listen(4000, () => {
	console.log("O servidor está funcionando com SUCESSO!")
})
