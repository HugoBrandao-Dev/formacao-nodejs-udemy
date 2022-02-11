<template>
	<div id="cliente">
		<h3>Informações do cliente</h3>
		<div class="cliente-info">
			<!-- <p><span>Nome</span>: {{ nome }}</p>
			<p><span>Idade</span>: {{ idade }}</p>
			<p><span>Telefone</span> : {{ telefone }}</p>
			<p><span>Email</span>: {{ email }}</p>
			<p><span>Descrição</span>: {{ descricao }}</p> -->
			<p><span>Nome</span>: {{ cliente.nome }}</p>
			<p><span>Idade</span>: {{ cliente.idade }}</p>
			<p><span>Telefone</span> : {{ cliente.telefone }}</p>
			<p><span>Email</span>: {{ cliente.email }}</p>
			<p><span>Descrição</span>: {{ descricao }}</p>
		</div>
	</div>
</template>

<script>
export default {
	// Habilita criar dados que podem ser usados dentro do template.
	data() {
		return {
			telefone: '(22) 22222-2222',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	},
	// Atributos que serão recebidos via props
	props: {
		// nome: String,
		// email: String,
		// idade: Number,
		cliente: Object
	}
}
</script>

<!--
scope indica que o estilo em questão só será aplicado a este componente.
-->
<style scoped>
	#cliente {
		padding: 10px;
		background-color: #f2f2f2;
		width: 600px;
	}
	#cliente-nome {
		color: white;
	}
	#cliente .cliente-info span {
		font-weight: bold;
	}
</style>
