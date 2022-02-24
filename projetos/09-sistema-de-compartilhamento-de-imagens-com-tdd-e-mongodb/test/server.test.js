const app = require('../src/app')
const superTest = require('supertest')

const request = superTest(app)

test('A aplicação deve responder na porta 4000', () => {
	return request.get('/')
		.then(res => {
			expect(res.statusCode).toEqual(200)
		})
})
