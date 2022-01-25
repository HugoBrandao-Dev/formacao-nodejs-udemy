/* ########## IMPORTAÇÕES ########## */

// Express
const express = require("express")
const app = express()

// Biblioteca de sessões do express
const session = require("express-session")

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

// Users
const usersController = require("./users/usersController")
const userModel = require("./users/user")

/* ########## CONFIGURAÇÕES ########## */

// Configurando a view engine do express para usar EJS
app.set("view engine", "ejs")

// Configuração o express-session
app.use(session({
	// Secret é uma senha de decriptação de sessão, recomenda-se algo aleatório.
	secret: "tobias",
	cookie: {
		// Tempo de expiração e uma sessão/cookie, em milissegundos.
		maxAge: 30000
	}
}))

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

// Utiliza users na rota
app.use("/", usersController)

/* ########## ROTAS ########## */

app.get("/", (req, res) => {
	articleModel.findAll({
		order: [
			['id', 'DESC']
		],
		limit: 4
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

app.get("/category/:slug", (req, res) => {
	let slug = req.params.slug
	categoryModel.findOne({
		where: {
			slug: slug
		},
		include: [
			{ model: articleModel }
		]
	}).then(category => {
		if (category) {
			categoryModel.findAll()
				.then(categories => {
					res.render("index", { articles: category.articles, categories })
				})
		} else {
			res.redirect("/")
		}
	})
	.catch(error => {
		res.redirect("/")
	})
})

app.get("/session", (req, res) => {
	
})

app.get("leitura", (req, res) => {

})

// Configuração da porta
app.listen(4000, () => {
	console.log("O servidor está funcionando com SUCESSO!")
})
