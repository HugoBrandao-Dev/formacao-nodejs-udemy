/* Mostra todos os banco de dados presentes no servidor */
SHOW DATABASES;

/* Criando um banco de dados */
CREATE DATABASE sistemaDeCadastro;

/* Acessando o banco de dados criado */
USE sistemaDeCadastro;

/* Mostra todas as tabelas do banco de dados corrente */
SHOW TABLES;

CREATE TABLE usuarios(
	nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/* Mostra a estrutura da tabela */
DESCRIBE usuarios;
