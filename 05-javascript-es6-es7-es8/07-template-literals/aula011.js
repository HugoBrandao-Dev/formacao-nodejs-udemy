let nome = "Doralice"
let idade = 21

function falar(nome, idade) {
	/*
	Template String = Template Literals
	Placeholders = Interpolação
	Também aceita as quebras de linha
	*/
	return `Olá, meu nome é
${ nome } e tenho
${ idade } anos.`
}

console.log(falar(nome, idade))
