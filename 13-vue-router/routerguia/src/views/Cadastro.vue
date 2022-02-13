<template>
	<div>
		<form>
			<label>Email:</label>
			<input type="email" name="email" id="iptEmail" placeholder="Informe seu email">
			<label>Nome:</label>
			<input type="text" name="nome" id="iptNome" placeholder="Informe seu nome">
			<button>Teste</button>
		</form>
		<p>{{ parametroRota }}</p>

		<!--
		Rota filha da aula Nested Routes, que rederiza, novamente, o 
		componente About
		-->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	created() {
		/*
		Pega o parâmetro passado na URL, essa configuração foi definida no 
		index.js da pasta router.
		*/
		// this.parametroRota = this.$route.params.dado
	},
	data() {
		return {
			parametroRota: null
		}
	}
}
</script>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 200px;
		margin: auto;
	}
	form input {
		width: 100%;
		margin-bottom: 10px;
	}
	form label {
		align-self: flex-start;
	}
</style>