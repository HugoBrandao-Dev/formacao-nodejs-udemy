<template>
  <div id="divRegister">
		<h1 class="title is-1">Registro de usuário</h1>
		<hr>
		<form>
			<div class="columns is-mobile is-centered">
				<div class="column is-half">
					<label>Nome</label>
					<input type="text" name="iptName" class="input mb-3" placeholder="Informe seu nome" v-model="name">
					<label>E-mail</label>
					<input type="email" name="iptEmail" class="input mb-3" placeholder="exemplo@email.com" v-model="email">
					<label>Senha</label>
					<input type="password" name="iptPassword" class="input" v-model="password">
					<hr>
					<button type="button" class="button is-success" @click="register">Cadastrar</button>
				</div>
			</div>
		</form>
  </div>
</template>

<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			password: null
		}
	},
	methods: {
		register: function() {
			console.log(this.name)
			console.log(this.email)
			console.log(this.password)
		}
	}
}
</script>

<style scoped>
</style>
