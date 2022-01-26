function somar_01(n1, n2 = 5, n3 = 2) {
	return n1 + n2 + n3
}

/*
Os parâmetros OBRIGATÓRIOS devem vir primeiro (opcionais devem vir por último).

function somar_02(n1 = 10, n2, n3 = 9) {
	return n1 + n2 + n3
}
*/

console.log(somar_01(2))
// console.log(somar_02(3))
