/* Atualiza determinado registro de uma tabela baseado no critério de atualização */
UPDATE usuarios SET nome = "Jeremias Cruz" WHERE nome = "Josias Cruz";
UPDATE usuarios SET email = "jere_cruz@gmail.com" WHERE nome = "Jeremias Cruz";
/*
OU
UPDATE usuarios SET nome = "Jeremias Cruz", email = "jere_cruz@gmail.com" WHERE nome = "Josias Cruz";
*/

SELECT * FROM usuarios;