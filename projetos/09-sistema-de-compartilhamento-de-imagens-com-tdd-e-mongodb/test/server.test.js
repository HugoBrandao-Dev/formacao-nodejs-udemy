let app = require('../src/app')
let supertest = require('supertest')
let request = supertest(app)
let mongoose = require('mongoose')

test("A aplicação deve resonder na porta 4000", function() {
  return request.get('/').then(res => {
    let status = res.statusCode
    expect(status).toEqual(200)
  }).catch(err => {
    fail(err)
  })
})

afterAll(async function() {
  try {
    await mongoose.connection.close()
  } catch (error) {
    console.error(error)
  }
})