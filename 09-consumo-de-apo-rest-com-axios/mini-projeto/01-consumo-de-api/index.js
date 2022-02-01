axios.get("http://localhost:4000/games")
	.then(response => {
		let games = response.data

		let tableGames = document.querySelector("table#table-games")

		games.forEach(game => {

			// Pega o corpo da tabela
			let tbodyTable = tableGames.getElementsByTagName("tbody")[0]

			// Cria uma nova string/tag para ser colocada dentro da tabela
			let trItem = `<tr>
			<th scope="row">${game.id}</th>
			<td>${ game.title }</td>
			<td>${ game.year }</td>
			<td>R$ ${ game.price }</td>
			<td>
				<a class="btn btn-warning mr-2">Editar</a>
				<button class="btn btn-danger">Deletar</button>
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
	let formGame = document.forms['form-criar-game']
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
			if (response.status == 200) {
				alert("Game cadastrado com sucesso.")
			}
		}).catch(error => {
			console.log(error)
		})
}