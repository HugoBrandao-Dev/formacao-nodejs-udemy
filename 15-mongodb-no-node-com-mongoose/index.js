const mongoose = require('mongoose')
const ArticleModel = require('./Article')

// URL de conexão com o servidor
mongoose.connect('mongodb://localhost:27017/aprendendoMongo')

/*
Carrega o esquema e retorna um objeto (criando um Model a partir de um Schema).
O "Article", dentro do método model, que será usado pelo Mongoose para a criação
da coleção, adicionando somente um "s", para ficar no plural, e coloca todas as
letras em minúsculas.
*/
const Article = mongoose.model('Article', ArticleModel)

// Instancia um novo artigo (documento)
/*
const artigo = new Article({
	title: 'MongoDB no Node com Mongoose',
	author: 'Victor Lima',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu quam imperdiet, fringilla erat sed, suscipit tortor. Nullam iaculis lectus vel urna tincidunt maximus. Aliquam erat volutpat. Maecenas luctus, felis vitae tempor consectetur, neque mi auctor lectus, at tincidunt arcu ante non ex. Etiam elementum mauris rutrum odio elementum, nec dignissim lectus mattis. Duis sagittis metus aliquet tellus auctor venenatis. Sed bibendum, dolor at faucibus bibendum, quam ipsum finibus velit, in tincidunt purus urna sit amet tortor. Nam bibendum, ex quis ultricies fermentum, quam massa gravida justo, at rutrum felis lorem id ex. Aliquam finibus porta facilisis. Aliquam malesuada mauris arcu, at blandit est egestas sed. Curabitur finibus at libero at suscipit. Vivamus vel eros vestibulum, egestas quam a, dignissim enim. Sed vel metus vel orci tempus egestas. Nullam arcu dolor, sollicitudin sed rhoncus non, commodo at ipsum.'
})
*/

// Sava o artigo (documento) dentro da coleção Articles do banco de dados.
/*
artigo.save()
	.then(() => {
		console.log('Artigo salvo!')
	})
	.catch(error => {
		console.log(error)
	})
*/

// Busca por TODOS os documentos salvos dentro de uma determinada coleção
/*
Article.find({}).then(articles => {
	console.log(articles)
}).catch(error => {
	console.log(error)
})
*/

// Faz a busca por um determinado artigo, baseado em seu ID, dentro de uma determinada coleção.
/*
Article.find({
	'_id': '621034d7fa05240538ac557b'
}).then(article => {
	console.log(article)
}).catch(error => {
	console.log(error)
})
*/

// Faz uma busca por um determinado artigo, baseado em seu Autor, dentro de uma determinada coleção.
/*
Article.find({
	'author': 'Tobias de Oliveira',
	// Podem haver mais critérios de busca aqui [CHAVE]:[VALOR].
}).then(article => {
	console.log(article)
}).catch(error => {
	console.log(error)
})
*/

// Faz uma busca por um determinado artigo, utilizando critérios que estão aninhados
/*
Article.find({
	'author': 'Dinorá de Oliveira',
	'resume.author': 'Tobias de Oliveira'
}).then(article => {
	console.log(article)
}).catch(error => {
	console.log(error)
})
*/

// Retorna somente o primeiro (One) documento que for encontrado.
/*
Article.findOne({
	author: 'Victor Lima'
}).then(article => {
	console.log(article)
}).catch(error => {
	consoel.log(error)
})
*/

// Deletando um dado, baseado em seu ID.
Article.findByIdAndDelete('621035da9c160ea062b6c3a3').
	then(() => {
		console.log('Documento deletado com sucesso.')
	})
	.catch(error => {
		console.log(error)
	})