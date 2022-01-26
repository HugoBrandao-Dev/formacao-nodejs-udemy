let pessoa = {
	nome: "Tobias",
	sobrenome: "de Oliveira",
	idade: 41,
	casado: true
}

// { [CHAVES DESEJADAS] } = [OBJETO]
let { nome, sobrenome } = pessoa

console.log(`${ nome } ${ sobrenome }.`)
