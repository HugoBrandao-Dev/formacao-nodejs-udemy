<template>
  <div id="divEdit">
    <h1 class="title is-1">Editar usuário</h1>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <hr />
        <form>
          <label>Nome:</label>
          <input type="text" name="iptName" v-model="name" class="input mb-3"/>
          <label>Email:</label>
          <input type="email" name="iptEmail" v-model="email" class="input mb-3" />
          <div class="mb-3">
						<label>Cargo: </label>
						<div class="select is-info is-small">
							<select name="sltCargo" v-model="role">
								<option value="1">Administrador(a)</option>
								<option value="0">Usuário(a) comum</option>
							</select>
						</div>
					</div>
					<hr>
          <button type="button" class="button is-warning" @click="update">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			id: null,
			name: null,
			email: null,
			role: null
		}
	},
	methods: {
		getAuthorization: function() {
			return {
				headers: {
					Authorization: `Bearer ${ localStorage.getItem('TokenAPIUser') }`
				}
			}
		},
		update: function() {
			axios.put('http://localhost:4000/user', {
				id: this.id,
				name: this.name,
				email: this.email,
				role: this.role
			}, this.getAuthorization())
				.then(res => {
					console.log(res)
					this.$router.push({ name: 'Users'})
				})
				.catch(error => {
					console.log(error)
				})
		}
	},
	created() {
		axios.get(`http://localhost:4000/user/${ this.$route.params.id }`, this.getAuthorization())
			.then(res => {
				this.id = res.data.id
				this.name = res.data.name
				this.email = res.data.email
				this.role = res.data.role
			})
			.catch(error => {
				console.log(error)
				this.$router.push({ name: 'Users' })
			})
	}
};
</script>

<style>
</style>