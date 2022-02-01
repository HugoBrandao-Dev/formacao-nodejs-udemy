axios.get("http://localhost:4000/games")
	.then(response => {
		console.log(response)
	}).catch(error => {
		console.log(error)
	})