const express = require("express")

/*
Com a utilização do router, o express detecta automaticamente
que este aquivo se trata de uma arquito de rota.
*/
const router = express.Router()

router.get("/categories", (req, res) => {
	res.send("Rota para categories")
})

router.get("/admin/categories/new", (req, res) => {
	res.send("Rota para criar uma nova Categorie.")
})

module.exports = router