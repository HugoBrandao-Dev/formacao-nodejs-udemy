const express = require('express')
const app = express()

// Módulo node para pergarmos nomes e extensões de arquivos
const path = require('path')

// Biblioteca e middleware para upload de arquivos
const multer = require('multer')

// Permite a manipulação de arquivos, logo após um upload.
const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, 'files/')
	},
	filename: function(req, file, callback) {
		/*
		file.originalname - Pega o nome do arquivo e sua extensão original.
		Permite pegar somente a extensão de um determinado alquivo.
		*/
		let extension = path.extname(file.originalname)

		// Pega somente o nome do arquivo, excluindo a extensão
		let name = path.basename(file.originalname, extension)

		// Gera um "hash", para que não haja um possível conflito de nomes
		let time = Date.now()
		callback(null, `${ name }${ time }${ extension }`)
	}
})

// Não colocar / na FRENTE (INÍCIO) do caminho.
const upload = multer({storage})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

// single() recebe o nome do campo que receberá o arquivo.
app.post('/upload', upload.single('iptFile'), (req, res) => {
	res.send('Arquivo recebido.')
})

app.listen(4000, () => {
	console.log('Servidor rodando...')
})