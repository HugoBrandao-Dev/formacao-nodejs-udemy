class Dado {
	constructor(faces) {
		this.faces = faces
	}

	jogar() {
		return Math.floor(Math.random() * this.faces + 1)
	}
}

let dado = new Dado(10)
console.log(`Valor ${ dado.jogar() }.`)
