axios.get("http://localhost:4000/games")
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

let btnCadastrar = document.querySelector('button#btn-cadastrar')
btnCadastrar.addEventListener('click', createGame)

function createGame() {
	let formGame = document.forms['form-game']
	let iptTitle = formGame["ipt-title"]
	let iptYear = formGame["ipt-year"]
	let iptPrice = formGame["ipt-price"]

	let title = iptTitle.value
	let year = parseInt(iptYear.value)
	let price = parseFloat(iptPrice.value).toFixed(2)

	let gameObject = {
		title,
		year,
		price
	}

	axios.post('http://localhost:4000/game', gameObject)
		.then(response => {
			if (response.status == 201) {
				alert("Game cadastrado com sucesso.")
			}
		}).catch(error => {
			console.log(error)
		})
}

function deletarGame(id) {
	if (confirm(`Deletar jogo de id ${ id } ?`)){
		axios.delete(`http://localhost:4000/game/${ id }`)
			.then(response => {
				console.log(response.status)
			}).catch(error => {
				console.log(error)
			})
	}
}

let btnAtualizar = document.querySelector("button#btn-atualizar")
btnAtualizar.addEventListener('click', atualizarGame)

function editarGame(id) {
	axios.get(`http://localhost:4000/game/${ id }`)
		.then(response => {
			let game = response.data

			let formGame = document.forms['form-game']
			let iptId = formGame['ipt-id']
			let iptTitle = formGame['ipt-title']
			let iptYear = formGame['ipt-year']
			let iptPrice = formGame['ipt-price']

			iptId.value = game.id
			iptTitle.value = game.title
			iptYear.value = game.year
			iptPrice.value = game.price

			btnAtualizar.removeAttribute('disabled')
		}).catch(error => {
			console.log(error)
		})
}

function atualizarGame() {
	let formGame = document.forms['form-game']
	let iptId = formGame["ipt-id"]
	let iptTitle = formGame["ipt-title"]
	let iptYear = formGame["ipt-year"]
	let iptPrice = formGame["ipt-price"]

	let id = iptId.value
	let title = iptTitle.value
	let year = parseInt(iptYear.value)
	let price = parseFloat(iptPrice.value).toFixed(2)

	let gameObject = {
		title,
		year,
		price
	}

	axios.put(`http://localhost:4000/game/${ id }`, gameObject)
		.then(response => {
			if (response.status == 200) {
				btnAtualizar.setAttribute('disabled', 'true')
				iptId.value = ''
				alert("Game atualizado com sucesso.")
			}
		}).catch(error => {
			console.log(error)
		})
}