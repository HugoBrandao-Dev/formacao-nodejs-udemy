const Sequelize = require("sequelize")

// Configurações da conexão com o banco de dados
const connection = new Sequelize("guiapress", "root", "#Oguh591022#", {
	host: "localhost",
	dialect: "mysql"
})

module.exports = connection