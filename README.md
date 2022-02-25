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

No final do Capítulo de Vue JS - Introdução, o professor nos ensina a como 
instalar o framework CSS Bulma, para que pudessemos usá-lo na próxima aula,
mas não há uma aula seguinte sobre o assunto, o capítulo termina nessa mesma
aula, partindo direto para o próximo Capítulo (Projeto Pokédex).

Na aula "Importando imagens" do Capítulo referente ao projeto 04 (Pokedex),
o professor utilizou uma imagem própria (do Guia do Programador) de banner,
e não disponibilizou essa mesma para download, sendo assim, foi utilizada 
a imagem "logo.png" do proprio projeto base do Vue JS para substituí-la.

Na aula "Preparando a base" do Capítulo referente ao projeto 09 (sistema de
compartilhamento de Imagens com TDD e MongoDB), o professor usa o método fail,
para capturar erros que possam acontecer durante testes em requisições. Porém,
ao realizar este mesmo procedimento, me foi mostrado um ReferenceError, 
dizendo que o fail não está definido.

Decidi por não fazer a seção 30 "Projeto 09 - Sistema de compartilhamento de 
imagens com TDD e MongoDB", apenas assistir, devido as várias mudanças ocorridas
dentro das ferramentas usadas, entre as versões atualmente disponíveis e a versões
usadas pelo professor.

Decidi por não fazer a seção 31 "Mercado Pago + NodeJS", apenas assistir,
devido as burocracias que existem na criação de conta e as dificuldades
em fazer um simples login no sistema do Mercado Pago, tanto no app quanto
no próprio site, atualmente.