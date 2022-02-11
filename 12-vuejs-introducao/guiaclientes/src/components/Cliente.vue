<template>
	<div id="cliente">
		<h2 id="cliente-nome">Cliente aqui</h2>
		<h3>Descrição cliente</h3>
		<!-- Posso colocar expressões JavaScript que retornem algum valor -->
		<p>Nome: {{ nome }}</p>
		<p>Idade: {{ idade }} ano(s)</p>
		<p>Telefone: {{ telefone }}</p>
		<p>Email: {{ email }}</p>
	</div>
</template>

<script>
export default {
	// Habilita criar dados que podem ser usados dentro do template.
	data() {
		return {
			nome: 'Tobias de Oliveira',
			telefone: '(22) 22222-2222',
			email: 'tobias@gmail.com',
			idade: 21
		}
	}
}
</script>

<!--
scope indica que o estilo em questão só será aplicado a este componente.
-->
<style scoped>
	#cliente {
		padding: 10px;
		color: green;
		background-color: black;
		width: 600px;
	}
	#cliente-nome {
		color: white;
	}
</style>
