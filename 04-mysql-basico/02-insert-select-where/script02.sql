/* Insere dados na tabela */
INSERT INTO usuarios (nome, email, idade) VALUES (
	"Tobias de Oliveira",
	"tobias_oli@hotmail.com",
	32
);

INSERT INTO usuarios (nome, email, idade) VALUES (
	"Doralice Cruz",
	"dora_cruz@gmail.com",
	23
);

INSERT INTO usuarios (nome, email, idade) VALUES (
	"Josias Cruz",
	"josias_cruz@gmail.com",
	23
);

/* Mostra todos os dados presentes dentro da tabela */
SELECT * FROM usuarios;

/* Faz uma busca com critério de seleção */
SELECT * FROM usuarios WHERE nome = "Tobias de Oliveira";
SELECT * FROM usuarios WHERE idade > 23;
