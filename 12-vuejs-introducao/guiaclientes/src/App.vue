<template>
  <div id="app">
		<form class="form">
			<fieldset>
				<legend>Cadastro</legend>
				<div class="ipt-control">
					<label>Nome:</label>
					<input type="text" placeholder="Informe seu nome" name="iptNome" v-model="nomeField">
					<small id="nomeError" class="msgError" v-if="nomeError">Nome é inválido</small>
				</div>
				<div class="ipt-control">
					<label>Email:</label>
					<input type="email" placeholder="Informe seu email" name="iptEmail" v-model="emailField">
					<small id="emailError" class="msgError" v-if="emailError">Email é inválido</small>
				</div>
				<div class="ipt-control">
					<label>Idade:</label>
					<input type="number" min="1" max="150" name="iptIdade" v-model="idadeField">
					<small id="idadeError" class="msgError" v-if="idadeError">Idade é inválido</small>
				</div>
				<button type="button" @click="cadastrar">Cadastrar</button>
			</fieldset>
		</form>
		<h1>Guia Cliente</h1>
		<!-- O atributo especial :key é obrigatório para o v-for -->
		<div class="clientes"
			v-for="(cliente, index) in orderClientes" 
			:key="cliente.id">
			<p>Índice no array: {{ index }}</p>
			<!--
			@meDelete é um evento emitido pelo componente filho, e seu $event são os parâmetros adicionais passados pelo componente filho.
			-->
			<Cliente :cliente="cliente" @meDelete="deletarCliente($event)"/>
			<h3>Edição:</h3>
			<input type="text" v-model="cliente.nome">
			<input type="email" v-model="cliente.email">
			<hr>
		</div>
  </div>
</template>

<script>
import Cliente from './components/Cliente'
import _ from 'lodash'

export default {
  name: 'App',
	data() {
		return {
			nomeField: null,
			nomeError: false,
			emailField: null,
			emailError: false,
			idadeField: null,
			idadeError: false,
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
					idade: 32,
					email: 'tobias32@gmail.com'
				}
			],
		}
	},
	methods: {
		isDadosValidos: function() {
			if (!this.nomeField || !isNaN(this.nomeField)) {
				this.nomeError = true
			} else {
				this.nomeError = false
			}

			if (!this.emailField) {
				this.emailError = true
			} else {
				this.emailError = false
			}

			if (!this.idadeField || (this.idadeField <= 0 || this.idadeField > 150)) {
				this.idadeError = true
			} else {
				this.idadeError = false
			}

			return !this.nomeError && !this.emailError && !this.idadeError
		},
		cadastrar: function() {
			if (this.isDadosValidos()) {
				this.clientes.push({
					id: Date.now(),
					nome: this.nomeField,
					idade: this.idadeField,
					email: this.emailField
				})
			} else {
				console.log('Erro na validação dos dados do formulário.')
			}
		},
		deletarCliente: function($event) {
			console.log('Evento recebido!')
			let id = $event.idCliente

			/*
			O filter só joga para dentro do novo array, os dados que satisfaçam a
			regra.
			*/
			let novoArray = this.clientes.filter(cliente => cliente.id != id)
			this.clientes = novoArray

			// Também é possível buscar uma função definida dentro do componente filho.
			// $event.component.testar()
		}
	},
	components: {
		Cliente
	},
	computed: {
		orderClientes: function() {
			// orderBy é uma função de ordenação do lodash
			//  _.orderBy([O QUE SE DEVE ORDENAR], [['PELO QUE ORDENAR']], [['TIPO DE ORDENAÇÃO']])
			return _.orderBy(this.clientes, ['nome'], ['ASC'])
		}
	}
}
</script>

<style>
	.form fieldset, form fieldset .ipt-control {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.form fieldset .ipt-control {
		margin-bottom: 10px;
	}
	.form .ipt-control .msgError {
		color: red;
	}
</style>
