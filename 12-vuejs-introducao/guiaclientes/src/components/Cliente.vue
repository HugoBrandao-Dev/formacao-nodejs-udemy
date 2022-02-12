<template>
	<div :class="{cliente: true, 'cliente-premium': isPremium, 'cliente-comum': !isPremium }">
		<h2>{{ cliente.nome }}</h2>
		<hr>
		<p><span>Email:</span> {{ cliente.email }}</p>
		<p v-if="mostrarIdade"><span>Idade: </span> {{ cliente.idade }} anos</p>
		<p v-else>O usuário escondeu a idade.</p>
		<!--
		$event é uma variável reservada do Vue, para passar informações de um
		evento para dentro do método que é chamado todas as vezes que o evento
		acontecer.
		-->
		<button type="button" @click="mudarCor($event)">Mudar cor!</button>
		<button type="button" @click="emitirEventoDelete">Deletar</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isPremium: false
		}
	},
	methods: {
		mudarCor: function(event) {
			// O this é necessário para pegar as variáveis dentro de data()
			this.isPremium = !this.isPremium

			console.log(event)
		},
		emitirEventoDelete: function() {
			console.log('Emitindo do filho...')
			// Emite um evento deste componente filho para o componente pai.
			this.$emit("meDelete", {
				idCliente: this.cliente.id,
				curso: 'Formação NodeJS',
				promocao: true,
				// this = componente cliente (atributos e métodos desse componente)
				component: this
			})
		},
		testar: function() {
			console.log('Testando para valer!')
			alert("Isso é um alert!")
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
