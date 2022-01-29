// COMPONENTES REUTILIZÁVEIS

class Leitor {
	ler(cominho) {
		return "Conteúdo do arquivo"
	}
}

class Escritor {
	escrever(arquivo, conteudo) {
		return "Conteúdo escrito"
	}
}

class Criador {
	criar(nome) {
		return "Arquivo criado"
	}
}

class Destruidor {
	destruir(nome) {
		return "Deletando arquivo!"
	}
}

// CLASSES

class ManipuladoDeArquivo {
	constructor(nome) {
		this.arquivo = nome
		this.Leitor = new Leitor()
		this.Escritor = new Escritor()
		this.Criador = new Criador()
		this.Destruidor = new Destruidor()
	}
}

class GerenciadorDeArquivo {
	constructor() {
		this.Criador = new Criador()
		this.Escritor = new Escritor()
	}

	salvarListaDeUsuario(lista) {
		this.Criador.criar("usuarios.txt")
		this.Escritor.escrever("usuarios.txt", lista)
	}
}

let manipulador1 = new ManipuladoDeArquivo("meuarquivo.txt")
console.log(manipulador1.Leitor.ler())
console.log(manipulador1.Escritor.escrever())
console.log(manipulador1.Criador.criar())
console.log(manipulador1.Destruidor.destruir())

let gerenciador1 = new GerenciadorDeArquivo()
gerenciador1.salvarListaDeUsuario()
