<template>
	<div id="divUsers">
		<h1 class="title is-1">Usuários</h1>
		<div class="columns is-mobile is-centered">
			<div class="column is-half">		
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Email</th>
							<th>Cargo</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in users" :key="user.id">
							<td>{{ user.id }}</td>
							<td>{{ user.nome }}</td>
							<td>{{ user.email }}</td>
							<td>{{ user.role | formatRole }}</td>
							<td>
								<button class="button is-warning">Editar</button>
								<button class="button is-danger ml-3">Deletar</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			users: null
		}
	},
	created: function() {
		let req = {
			headers: {
				'Authorization': `Bearer ${ localStorage.getItem('TokenAPIUser') }`
			}
		}

		axios.get('http://localhost:4000/user', req)
			.then(res => {
				this.users = res.data
			})
			.catch(error => {
				console.log(error)
			})
	},
	filters: {
		formatRole(value) {
			if (value == 1) {
				return "Administrador(a)"
			}
			return "Usuário(a)"
		}
	}
}
</script>

<style>

</style>