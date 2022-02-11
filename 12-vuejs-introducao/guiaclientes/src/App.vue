<template>
  <div id="app">
		<h1>Guia Cliente</h1>
		<Cliente :cliente="cliente" :mostrarIdade="true"/>
  </div>
</template>

<script>
import Cliente from './components/Cliente'

export default {
  name: 'App',
	data() {
		return {
			cliente: {
				nome: 'Tobias de Oliveira',
				idade: 32,
				email: 'tobias32@gmail.com'
			}
		}
	},
	components: {
		Cliente
	}
}
</script>

<style>

</style>
