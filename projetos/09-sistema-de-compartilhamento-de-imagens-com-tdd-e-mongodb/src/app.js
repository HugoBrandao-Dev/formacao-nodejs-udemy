let express = require('express')
let app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', function(req, res) {
  res.json({})
})

module.exports = app