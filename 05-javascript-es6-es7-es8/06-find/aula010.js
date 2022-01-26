let pessoa1 = {
	nome: "Tobias de Oliveira",
	empresa: "Google"
}

let pessoa2 = {
	nome: "Dinorá de Oliveira",
	empresa: "Apple"
}

let pessoa3 = {
	nome: "Josias Cruz",
	empresa: "Oracle"
}

let pessoa4 = {
	nome: "Doralice Cruz",
	empresa: "IBM"
}

let listaPessoas = [pessoa1, pessoa2, pessoa3, pessoa4]

/*
Find faz buscas, em um array de objetos, por um objeto que atenda a condição
estabelecida.
*/

let resultado = listaPessoas.find(pessoa => pessoa.empresa === "IBM")

console.log(resultado)
