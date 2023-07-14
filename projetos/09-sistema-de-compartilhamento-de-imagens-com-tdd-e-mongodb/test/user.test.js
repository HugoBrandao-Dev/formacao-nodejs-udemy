let app = require('../src/app')
let supertest = require('supertest')
let request = supertest(app)
let mongoose = require('mongoose')

let mainUser = {
  name: 'Tobias de Oliveira',
  email: 'tobias@gmail.com',
  password: 'tobias321'
}

beforeAll(() => {
  return request.post('/user').send(mainUser)
    .then(function() {})
    .catch(function(error) { console.error(error) })
})

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

  test("Deve impedir que um usuário se cadastre com um e-mail repetido.", function() {
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

        return request.post("/user").send(user)
          .then(function(res) {
            expect(res.statusCode).toEqual(400)
            expect(res.body.error).toBe('E-mail já cadastrado.')
          })
          .catch(function(error) {
            fail(error)
          })
      })
      .catch(function(error) {
        fail(error)
      })
  })
})

describe("Autenticação", function() {
  test("Deve me retornar um token quando logar.", function() {
    return request.post('/auth').send({ email: mainUser.email, password: mainUser.password })
      .then(function(res) {
        expect(res.statusCode).toEqual(200)
        expect(res.body.token).toBeDefined()
      })
      .catch(function(error) {
        fail(error)
      })
  })
})

afterAll(async function() {
  try {
    await request.delete(`/user/${ mainUser.email }`)
    await mongoose.connection.close()
  } catch (error) {
    console.error(error)
  }
})