<template>
	<div class="pokemon">
		<h1 class="pokemon-name">{{ num }} - {{ name }}</h1>
		<small class="pokemon-url">{{  url }}</small>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	created: function() {
		axios.get(this.url)
			.then(response => {
				this.pokemon.type = response.data.types[0].type.name
				this.pokemon.front = response.data.sprites.front_default
				this.pokemon.back = response.data.sprites.back_default
				console.log(this.pokemon)
			})
	},
	data() {
		return {
			pokemon: {}
		}
	},
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