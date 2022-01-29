// Esse sistema simula um petshop

class Animal {
	constructor(nome, idade, preco) {
		this.nome = nome
		this.idade = idade
		this.preco = preco
	}

	emitirSom() {
		console.log("Som de animal")
	}
}

class Cachorro extends Animal {
	constructor(nome, idade, preco, raca, peso) {
		super(nome, idade, preco)
		this.raca = raca
		this.peso = peso
	}

	emitirSom() {
		// É possível utilizar o operador super para chamar método da classe mãe
		super.emitirSom()
		console.log("Au Au Au")
	}
}

// Animais

let animal1 = new Animal("Tobias", 12, 200)
console.log(animal1.nome)
console.log(animal1.idade)
console.log(animal1.preco)
animal1.emitirSom()
console.log()

// Cachorros

let cachorro1 = new Cachorro("Josias", 4, 250, "Rottweiler", 15)
console.log(cachorro1.nome)
console.log(cachorro1.idade)
console.log(cachorro1.preco)
console.log(cachorro1.raca)
console.log(cachorro1.peso)
cachorro1.emitirSom()
