let app = require('../src/app')
let supertest = require('supertest')
let request = supertest(app)

describe("Deve cadastrar um usuário com sucesso", function() {
  test("Deve cadastrar um usuário com sucesso.", function() {
    let time = Date.now()
    let email = `${ time }@yahoo.com`
    let user = {
      name: "Tobias de Oliveira",
      email,
      password: 'tobias123'
    }

    return request.post("/user").send(user)
      .then(function(res) {
        expect(res.statusCode).toEqual(200)
        expect(res.body.email).toBe(email)
      })
      .catch(function(error) {
        fail(error)
      })
  })

  test("Deve impedir que um usuário se cadastre com dados vazios", function() {
    let user = { name: "", email: "", password: "" }

    return request.post("/user").send(user)
      .then(function(res) {
        expect(res.statusCode).toEqual(400)
      })
      .catch(function(error) {
        fail(error)
      })
  })
})
