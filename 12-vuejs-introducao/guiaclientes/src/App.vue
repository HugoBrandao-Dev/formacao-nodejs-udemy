<template>
  <div id="app">
		<form class="form">
			<fieldset>
				<legend>Cadastro</legend>
				<label>Nome:</label>
				<input type="text" placeholder="Informe seu nome" v-model="nomeField">
				<label>Email:</label>
				<input type="email" placeholder="Informe seu email" v-model="emailField">
				<label>Idade:</label>
				<input type="number" min="0" max="150" v-model="idadeField">
				<button type="button" @click="cadastrar">Cadastrar</button>
			</fieldset>
		</form>
		<h1>Guia Cliente</h1>
		<!-- O atributo especial :key é obrigatório para o v-for -->
		<div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
			<p>Índice no array: {{ index }}</p>
			<Cliente :cliente="cliente"/>
			<h3>Edição:</h3>
			<input type="text" v-model="cliente.nome">
			<input type="email" v-model="cliente.email">
			<hr>
		</div>
  </div>
</template>

<script>
import Cliente from './components/Cliente'

export default {
  name: 'App',
	data() {
		return {
			nomeField: null,
			emailField: null,
			idadeField: null,
			clientes: [
				{
					id: 1,
					nome: 'Josias Cruz',
					idade: 23,
					email: 'josias_cruz@gmail.com'
				},
				{
					id: 2,
					nome: 'Doralice Cruz',
					idade: 34,
					email: 'doralice@hotmail.com'
				},
				{
					id: 3,
					nome: 'Dinorá de Oliveira',
					idade: 29,
					email: 'dinora_2012@bol.com.br'
				},
				{
					id: 4,
					nome: 'Tobias de Oliveira',
					idade:  32,
					email: 'tobias32@gmail.com'
				}
			],
		}
	},
	methods: {
		cadastrar: function() {
			this.clientes.push({
				id: Date.now(),
				nome: this.nomeField,
				email: this.emailField,
				idade: this.idadeField
			})
			this.nomeField = null
			this.emailField = null
			this.idadeField = null
		}
	},
	components: {
		Cliente
	}
}
</script>

<style>
	.form fieldset {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.form fieldset input {
		margin-bottom: 10px;
		outline: none;
	}
</style>
