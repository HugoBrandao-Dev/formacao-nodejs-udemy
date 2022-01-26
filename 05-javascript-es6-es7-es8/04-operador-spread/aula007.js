let curriculo = {
	ocupacao: "Nenhuma",
	anosExperiencia: 2,
	isBuscandoEmprego: true,
}

let pessoa = {
	nome: "Tobias",
	sobrenome: "de Oliveira",
	idade: 32,
	...curriculo
}

console.log(pessoa)
