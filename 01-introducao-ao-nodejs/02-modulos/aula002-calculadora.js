function somar(n1, n2) {
	return n1 + n2
}

function subtrair(n1, n2) {
	return n1 - n2
}

function dividir(n1, n2) {
	return n1 / n2
}

function multiplicar(n1, n2) {
	return n1 * n2
}

const info = 'Esta é uma calculadora com operações simples.'

module.exports = {
	somar,
	subtrair,
	dividir,
	multiplicar,
	info
}
