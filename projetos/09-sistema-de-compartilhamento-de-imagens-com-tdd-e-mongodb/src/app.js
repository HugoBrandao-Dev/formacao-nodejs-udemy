let express = require('express')
let app = express()
let mongoose = require('mongoose')
let bcrypt = require('bcrypt')

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

    let user = await User.findOne({ "email": req.body.email })
    if (user) {
      res.status(400)
      res.json({ error: 'E-mail já cadastrado.' })
      return
    }

    let password = req.body.password
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(password, salt)

    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })

    await newUser.save()
    res.json({email: req.body.email})
  } catch (error) {
    res.sendStatus(500)
  }
})

app.delete('/user/:email', async function(req, res) {
  try {
    await User.deleteOne({ email: req.params.email })
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

module.exports = app