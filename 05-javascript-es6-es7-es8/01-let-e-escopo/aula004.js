// var tem escopos: Globa e Local
// let tem escopos: Global, Local e Bloco

let nome = "Tobias" // Global (acessível, tanto para func_1 quanto para func_2)
var idade = "23" // Global (acessível, tanto para func_1 quanto para func_2)

function func_1() {
	let sobrenome = "Oliveira" // Local (inacessível para func_2)
	console.log(`${ nome } ${ sobrenome } tem ${ idade } anos.`)
}

function func_2() {
	var sobrenome = "Cruz" // Local (inacessível para func_1)
	console.log(`${ nome } ${ sobrenome } tem ${ idade } anos.`)
}


console.log(nome)
console.log(idade)
func_1()
func_2()

let mostrar = true
var n1 = 3

if (mostrar) { // Isso é um BLOCO if
	var n2 = 5 // N/A Bloco
	console.log(n1 + n2)
}

if (mostrar) { // Isso é um BLOCO if
	let n3 = 7 // Bloco
	console.log(n1 + n3)
}

/*
n2 será encontrado, por ter sido declarado com var, que NÃO tem escopo de bloco.
*/
console.log(n1 + n2)

/*
n3 não será encontrado, por ter sido declarado com let, que tem escopo de bloco.
console.log(n1 + n3)
*/
