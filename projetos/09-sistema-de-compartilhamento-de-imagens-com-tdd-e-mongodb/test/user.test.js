const app = require('../src/app')
const superTest = require('supertest')
let request = superTest(app)

describe('Cadastro de usuário', () => {
	test('Deve cadastrar um usuário com sucesso', () => {
		// Simula um novo email para cada nova requisição
		let email = `${ Date.now() }@gmail.com`

		let user = {
			name: 'Tobias de Oliveira', 
			email,
			password: 'tobias123'
		}

		// .send() faz o envio de informações via post, no Super Test
		return request.post('/user').send(user)
			.then(res => {
				expect(res.statusCode).toEqual(200)
				expect(res.body.email).toEqual(email)
			})
	})
})