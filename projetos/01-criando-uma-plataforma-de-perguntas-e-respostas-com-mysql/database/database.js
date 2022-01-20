const Sequelize = require("sequelize")

const connection = new Sequelize("guiaperguntas", "root", "#Oguh591022#", {
	host: "localhost",
	dialect: "mysql"
})

module.exports = connection
