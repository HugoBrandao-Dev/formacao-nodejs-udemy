<template>
  <div id="app">
		<input type="text" name="iptDinora" v-model="cliente.nome">
    <h1>Guia clientes</h1>
		<Cliente class="cliente"
			:cliente="cliente"
			:mostrarIdade="true"
		/>
		<Cliente class="cliente"
			:cliente="cliente"
			:mostrarIdade="false"
		/>
		<Cliente class="cliente"
			:cliente="cliente"
			:mostrarIdade="true"
		/>
		<!-- <form class="form-tobias">
			<h3>Info do Tobias</h3>
			<input type="text" name="iptNome" v-model="nomeTobias">
			<input type="email" name="iptEmail" v-model="emailTobias">
			<input type="number" name="iptIdade" v-model="idadeTobias">
		</form> -->
		<!-- nome, email e idade são props passadas ao componente cliente -->
		<!-- <Cliente class="cliente"
			:nome="nomeTobias"
			:email="emailTobias"
			:idade="idadeTobias"
		/>
		<Cliente class="cliente"
			nome="Josias Cruz"
			email="josias_rs@gmail.com"
			idade="34"
		/>
		<Cliente class="cliente"
			nome="Doralice Cruz"
			email="doralice_to@hotmail.com"
			idade="41"
		/> -->
		<!-- <Produto/> -->
  </div>
</template>

<script>
import Cliente from './components/Cliente'
// import Produto from './components/Produto'

export default {
  name: 'App',
	data() {
		return {
			nomeTobias: 'Tobias de Oliveira',
			emailTobias: 'tobias_123@gmail.com',
			idadeTobias: 34,
			cliente: {
				nome: 'Dinorá de Oliveira',
				idade: 49,
				telefone: '(20) 55555-5555',
				email: 'dinora@hotmail.com'
			}
		}
	},
	components: {
		Cliente,
		// Produto
	}
}
</script>

<style>
	#app .cliente {
		margin-bottom: 10px;
	}
	.form-tobias {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 10px;
	}
</style>
