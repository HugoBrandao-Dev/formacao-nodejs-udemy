class Calculadora {
	static somar(n1, n2) {
		return n1 + n2
	}
	static subtrair(n1, n2) {
		return n1 - n2
	}
	static dividir(n1, n2) {
		return n1 / n2
	}
	static multiplicar(n1, n2) {
		return n1 * n2
	}
}

let num1 = 6
let num2 = 2

console.log(Calculadora.somar(num1, num2))
console.log(Calculadora.subtrair(num1, num2))
console.log(Calculadora.dividir(num1, num2))
console.log(Calculadora.multiplicar(num1, num2))
