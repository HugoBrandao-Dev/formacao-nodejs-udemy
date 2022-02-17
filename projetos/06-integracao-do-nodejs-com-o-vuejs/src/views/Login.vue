<template>
	<div id="divLogin">
		<h1 class="title is-1">Fazer login</h1>
		<div class="columns is-mobile is-centered">
			<div class="column is-half">
				<hr>
				<form>
					<div class="notification is-danger" v-if="error">
						{{ error }}
					</div>
					<label>Email:</label>
					<input type="email" name="iptEmail" class="input" v-model="email" placeholder="Informe seu email">
					<label>Senha:</label>
					<input type="password" name="iptPassword" class="input" v-model="password">
					<hr>
					<button type="button" class="button is-primary mt-3" @click="login">Entrar</button>
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
			email: null,
			password: null,
			error: null
		}
	},
	methods: {
		login: function() {
			axios.post('http://localhost:4000/login', {
				email: this.email,
				password: this.password
			}).then(res => {

				// Guarda o token dentro do localStorage do navegador
				localStorage.setItem("TokenAPIUser", res.data.token)
				this.$router.push({name: 'Home'})
			}).catch(error => {
				let msgError = error.response.data.error
				this.error = msgError
			})
		}
	}
}
</script>

<style scoped>
</style>
