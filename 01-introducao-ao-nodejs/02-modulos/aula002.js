const calculadora = require("./aula002-calculadora")

let valor1 = 10
let valor2 = 2

let soma = calculadora.somar(valor1, valor2)
let subtracao = calculadora.subtrair(valor1, valor2)
let divisao = calculadora.dividir(valor1, valor2)
let multiplicacao = calculadora.multiplicar(valor1, valor2)
let informacao = calculadora.info

console.log(informacao)
console.log(`A soma de ${ valor1 } e ${ valor2 } é ${ soma }.`)
console.log(`A subtracao de ${ valor1 } e ${ valor2 } é ${ subtracao }.`)
console.log(`A divisao de ${ valor1 } e ${ valor2 } é ${ divisao }.`)
console.log(`A multiplicacao de ${ valor1 } e ${ valor2 } é ${ multiplicacao }.`)
