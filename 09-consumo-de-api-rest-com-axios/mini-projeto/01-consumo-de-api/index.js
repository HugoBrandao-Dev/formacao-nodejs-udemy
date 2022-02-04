let axiosConfig = {
	headers: {
		// Busca no localStorage um token de nome apiGamesToken e concatena.
		Authorization: `Bearer ${ localStorage.getItem("apiGamesToken")}`
	}
}

/*============================ FORMULÁRIOS ===================================*/

// Formulário de cadastro e atualização
let formGame = document.forms['form-game']
let iptId = formGame["ipt-id"]
let iptTitle = formGame["ipt-title"]
let iptYear = formGame["ipt-year"]
let iptPrice = formGame["ipt-price"]

// Formulário de login
let formLogin = document.forms['form-login']
let iptEmail = formLogin['ipt-email']
let iptPassword = formLogin['ipt-password']

/*============================ EVENTOS DOM ===================================*/

let btnAtualizar = document.querySelector('button#btn-atualizar')
btnAtualizar.addEventListener('click', atualizarGame)

let btnCadastrar = document.querySelector('button#btn-cadastrar')
btnCadastrar.addEventListener('click', createGame)

let btnLogin = document.querySelector('button#btn-login')
btnLogin.addEventListener('click', login)

/*============================== AXIOS =======================================*/

// Busca os dados dentro do banco e popula a tabela de jogos cadastrados.
axios.get("http://localhost:4000/games", axiosConfig)
	.then(response => {
		let games = response.data

		let tableGames = document.querySelector("table#table-games")

		games.forEach(game => {

			// Pega o corpo da tabela
			let tbodyTable = tableGames.getElementsByTagName("tbody")[0]

			// Cria uma nova string/tag para ser colocada dentro da tabela
			let trItem = `<tr>
			<th scope="row" data-id="${ game.id }">${ game.id }</th>
			<td data-title="${ game.title }">${ game.title }</td>
			<td data-year="${ game.year }">${ game.year }</td>
			<td data-price="${ game.price }">R$ ${ game.price }</td>
			<td>
				<button class="btn btn-warning" onclick="editarGame(${ game.id })">Atualizar</button>
				<button class="btn btn-danger" onclick="deletarGame(${ game.id })">Deletar</button>
			</td>
			</tr>`

			// Adiciona a string/tag dentro do corpo da tabela como tag HTML
			tbodyTable.innerHTML += trItem
		})
	}).catch(error => {
		console.log(error)
	})

// Cria um novo jogo, baseado nas informações do formulário de cadastro/atualização
function createGame() {
	let title = iptTitle.value
	let year = parseInt(iptYear.value)
	let price = parseFloat(iptPrice.value).toFixed(2)

	let gameObject = {
		title,
		year,
		price
	}

	axios.post('http://localhost:4000/game', gameObject, axiosConfig)
		.then(response => {
		}).catch(error => {
			console.log(error)
		})
}

// Exclui um jogo, baseado no seu id.
function deletarGame(id) {
	if (confirm(`Deletar jogo de id ${ id } ?`)){
		axios.delete(`http://localhost:4000/game/${ id }`, axiosConfig)
			.then((response) => {
			}).catch(error => {
				console.log(error)
			})
	}
}

// Pega as informações do jogo no banco e popula o formulário para a edição.
function editarGame(id) {
	axios.get(`http://localhost:4000/game/${ id }`, axiosConfig)
		.then(response => {
			let game = response.data.game

			iptId.value = game.id
			iptTitle.value = game.title
			iptYear.value = game.year
			iptPrice.value = game.price

			btnAtualizar.removeAttribute('disabled')
		}).catch(error => {
			console.log(error)
		})
}

// Faz a atualização de um jogo, baseada nas informações presentes no formulário
function atualizarGame() {
	let id = iptId.value
	let title = iptTitle.value
	let year = parseInt(iptYear.value)
	let price = parseFloat(iptPrice.value).toFixed(2)

	let gameObject = {
		title,
		year,
		price
	}

	axios.put(`http://localhost:4000/game/${ id }`, gameObject, axiosConfig)
		.then(response => {
		})
		.catch(error => {
			console.log(error)
		})
}

// Faz o login para autenticação do usuário (geração do token)
function login() {
	let email = iptEmail.value
	let password = iptPassword.value

	axios.post("http://localhost:4000/auth", { email, password })
		.then(response => {
			let token = response.data.token

			// Armazenha o token dentro do armazenamento local do navegador
			localStorage.setItem("apiGamesToken", token)

			// Atualiza o Authorization para que tenha o valor do novo token gerado
			axiosConfig.headers.Authorization = `Bearer ${ localStorage.getItem('apiGamesToken') }`
			alert("Logado com sucesso")
		})
		.catch(error => {
			console.log(error)
		})
}
