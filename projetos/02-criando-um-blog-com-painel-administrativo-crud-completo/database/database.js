const Sequelize = require("sequelize")

// Configurações da conexão com o banco de dados
const connection = new Sequelize("guiapress", "root", "#Oguh591022#", {
	host: "localhost",
	dialect: "mysql",
	// Para que o Sequelize registre, corretamente, o horário do Brasil. (UTC -3h)
	timezone: "-03:00"
})

module.exports = connection