const app = require('../src/app')
const superTest = require('supertest')

/*
O supertest fará um integração automática com o express, sendo
assim, sempre que rodarmos um teste, o supertest subirá uma 
instância do express.
*/
let request = superTest(app)

test('A aplicação deve responder na porta 4000.', () => {

	// Ao se trabalhar com requisições assincronas, o test sempre DEVE retornar algo.
	return request.get('/').then(res => expect(res.statusCode).toEqual(200))

})

test('Deve retornar 200|bege|beige como resposta.', () => {
	return request.get('/corFavorita/tobias').then(res => {

		// Faz três verificações para a validação (deve passar nos três testes).
		expect(res.statusCode).toEqual(200)
		expect(res.body.corFavorita).toEqual('bege')
		expect(res.body.favoriteColor).toEqual('beige')
	})
})