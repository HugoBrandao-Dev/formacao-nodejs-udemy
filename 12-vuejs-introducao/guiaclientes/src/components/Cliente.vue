<template>
	<div :class="{cliente: true, 'cliente-premium': isPremium, 'cliente-comum': !isPremium }">
		<h2>{{ cliente.nome }}</h2>
		<hr>
		<p><span>Email:</span> {{ cliente.email }}</p>
		<p v-if="mostrarIdade"><span>Idade: </span> {{ cliente.idade }} anos</p>
		<p v-else>O usuário escondeu a idade.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isPremium: false
		}
	},
	props: {
		cliente: Object,
		mostrarIdade: Boolean
	}
}
</script>

<!--
scope indica que o estilo em questão só será aplicado a este componente.
-->
<style scoped>
	.cliente {
		width: 500px;
		padding: 5px;
		margin-bottom: 10px;
	}
	.cliente span {
		font-weight: bold;
	}
	.cliente-comum {
		background-color: #f2f2f2;
	}
	.cliente-premium {
		background-color: black;
		color: yellow;
	}
</style>
