let express = require('express')
let app = express()
let mongoose = require('mongoose')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology:true
}
mongoose.connect('mongodb+srv://hugobrandaodev:OdkgGWltotsvcsrL@cluster0.kmycn36.mongodb.net/?retryWrites=true&w=majority', connectionParams)
  .then(function(res) {

  })
  .catch(function(error) {
    console.error(error)
  })

app.get('/', function(req, res) {
  res.json({})
})

app.post('/user', function(req, res) {
  res.json({})
})

module.exports = app