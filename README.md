# Descrição
Plataforma: Udemy;
Curso: Formação Node.JS;
Professor: Victor Lima;
Tipo de ensino: Online;
Carga horária: 50h e 30m.

## Observações
A aula 01 do capítulo 3 (Fundamentos do Express.js), contém todos os assuntos
que trabalhamos durante todo o capítulo, uma vez que todas as aulas fazem parte
de um mesmo projeto/explicação.

Cada projeto do curso possui uma pasta, dentro de database, chamada scripts-sql,
dentro dela estão os scripts SQL que usei para criação da estrutura do banco
e para a visualização dos registros inseridos em suas tabelas.

No projeto 2, existe um bug de paginação, que é quando selecionamos a categoria
do artigo na barra de navegação, a paginação continua na tela, mas fica bugada,
selecionando artigos de categoria geral. Tal bug não foi corrigido no projeto
final.

Na aula 131 sobre "JSONs encurtados", o professor chama objetos JS de JSON,
o que não é correto. Um objeto JS pode ser convertido em um JSON, desde que seus
valores de propriedades sejam aceitáveis pelo JSON (ele não aceita todos os tipo
de valores que um objeto JS aceita). Sendo assim, a regra de encurtamento serve
para OBJETOS JS, e não para JSON.

No mini projeto do Capítulo 9 (Consumo de API rest com axios), algumas
requisições feitas com o axios impedem que mensagens de alert(), funções e
alterações no template sejam executadas, caso as requisições obtenham sucesso
(dentro do bloco do response).
Exemplos:
* Exibir uma mensagem de sucesso (alert) na deleção de um item da lista;
* Exibir uma mensagem de sucesso (alert) na criação de um novo item;
* Mudar o estado do botão "Atualizar" (seu atributo disabled), depois de uma
atualização ou cadastro de um novo item;
* Colocar a CHAMADA de uma função que limpa os campos do formulário de
cadastro/atualização, depois que cadastro ou atualizo um item.

No Capítulo de Vue JS - Introdução, só é possível ver os progressos das aulas
através dos histórico de commits realizados, já que não separei cada aula em
arquivos separados.
