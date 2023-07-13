let mongoose = require('mongoose')

let User = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

module.exports = User