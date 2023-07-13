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
    console.log(error)
  })

// Models
let user = require('./models/User')
let User = mongoose.model("User", user)

// Rotas
app.get('/', function(req, res) {
  res.json({})
})

app.post('/user', async function(req, res) {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      res.sendStatus(400)
      return
    }
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      senha: req.body.password
    })

    await newUser.save()
    res.json({email: req.body.email})
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = app