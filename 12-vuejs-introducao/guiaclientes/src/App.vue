<template>
  <div id="app">
    <h1>Guia clientes</h1>
		<Cliente/>
		<Produto/>
  </div>
</template>

<script>
import Cliente from './components/Cliente'
import Produto from './components/Produto'

export default {
  name: 'App',
	components: {
		Cliente,
		Produto
	}
}
</script>

<style>

</style>
