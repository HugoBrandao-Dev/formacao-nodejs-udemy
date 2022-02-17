<template>
	<div id="divLogin">
		<h1 class="title is-1">Fazer login</h1>
		<div class="columns is-mobile is-centered">
			<div class="column is-half">
				<hr>
				<form>
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
			console.log(this.email, this.password)
		}
	}
}
</script>

<style scoped>
</style>
