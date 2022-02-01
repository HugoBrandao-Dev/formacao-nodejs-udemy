axios.get("http://localhost:4000/games")
	.then(response => {
		let games = response.data

		let tableGames = document.querySelector("table#table-games")

		games.forEach(game => {

			// Pega o corpo da tabela
			let tbodyTable = tableGames.getElementsByTagName("tbody")[0]

			// Cria uma nova string/tag para ser colocada dentro da tabela
			let trItem = `<tr>
			<th scope="row">${ game.id }</th>
			<td>${ game.title }</td>
			<td>${ game.year }</td>
			<td>${ game.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }</td>
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