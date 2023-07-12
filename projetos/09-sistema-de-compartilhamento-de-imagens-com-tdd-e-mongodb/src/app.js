let express = require('express')
let app = express()
let mongoose = require('mongoose')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect('mongodb+srv://hugobrandaodev:OdkgGWltotsvcsrL@cluster0.kmycn36.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology:true
})

app.get('/', function(req, res) {
  res.json({})
})

module.exports = app