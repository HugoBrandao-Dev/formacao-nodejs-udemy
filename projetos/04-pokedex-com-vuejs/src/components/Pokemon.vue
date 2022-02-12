<template>
	<div class="pokemon">
		<h1 class="pokemon-name">{{ num }} - {{ name }}</h1>
		<small class="pokemon-url">{{  url }}</small>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		url: String,
		num: Number
	},
	/*
	Solução apresentada pelo professor
	filters: {
		upper: function(pokemonName) {
			let primeiraLetraFormatada = pokemonName[0].toUpperCase()
			let restanteCorpo = pokemonName.slice(1)
			return primeiraLetraFormatada + restanteCorpo
		}
	}
	*/
}
</script>

<style>
	/* Mesma funcionalidade do filtro upper, proposto pelo professor */
	.pokemon .pokemon-name {
		text-transform: capitalize;
		font-weight: bold;
	}
</style>