<template>
  <div id="divRegister">
		<h1 class="title is-1">Registro de usuário</h1>
			<div class="columns is-mobile is-centered">
				<div class="column is-half">
					<form>
						<hr>
						<div class="notification is-danger mt-2" v-if="error">
							{{ error }}
						</div>
						<label>Nome:</label>
						<input type="text" name="iptName" class="input" placeholder="Informe seu nome" v-model="name">
						<label>E-mail:</label>
						<input type="email" name="iptEmail" class="input" placeholder="exemplo@email.com" v-model="email">
						<label>Senha:</label>
						<input type="password" name="iptPassword" class="input" v-model="password">
						<hr>
						<button type="button" class="button is-success" @click="register">Cadastrar</button>
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
			name: null,
			email: null,
			password: null,
			error: null
		}
	},
	methods: {
		register: function() {
			axios.post('http://localhost:4000/user', {
				name: this.name,
				email: this.email,
				password: this.password,
			}).then(res => {
					console.log(res)

					// Redireciona o usuário, caso a conta tenha sido criada com sucesso.
					this.$router.push({ name: 'Home' })
				})
				.catch(error => {
					let msgError = error.response.data.error
					this.error = msgError
				})
		}
	}
}
</script>

<style scoped>
</style>
