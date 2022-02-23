const calculadora = require('../src/calculadora')

/*
Coloca-se dentro do describe, quando há um Suite de test muito grande,
como em formulários, por exemplo.
*/
describe('Operações básicas', () => {

	// [O QUE O TESTE FAZ], [PROGRAMAÇÃO]
	test('Deve retornar o valor 10 ao somar 5 + 5.', () => {

		let resultado = calculadora.somar(5, 5)
		expect(resultado).toEqual(10)

	})

	test('Deve retornar o valor 50 ao multiplicar 5 * 10.', () => {
		let resultado = calculadora.multiplicar(5, 10)
		expect(resultado).toEqual(50)
	})

	test('Deve retornar o valor 5 ao dividir 25 / 5.', () => {
		let resultado = calculadora.dividir(25, 5)
		expect(resultado).toEqual(5)
	})

	test('Deve returnar o valor 2 ao subtrair 5 - 3.', () => {
		let resultado = calculadora.subtrair(5, 3)
		expect(resultado).toEqual(2)
	})
	
})
