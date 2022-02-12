<template>
	<div class="pokemon">
		<div class="card">
			<div class="card-image">
				<figure>
					<img :src="pokemon.front" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<p class="title is-4">{{ num }} - {{ name | upper }}</p>
						<p class="subtitle is-6">{{ pokemon.type }}</p>
					</div>
				</div>

				<div class="content">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	created: function() {
		axios.get(this.url)
			.then(response => {
				/*
				pokemon, dentro de data(), deve conter as mesmas propriedades (type, front e back) dentro de seu corpo, para que sejam exibidos no template
				*/
				this.pokemon.type = response.data.types[0].type.name
				this.pokemon.front = response.data.sprites.front_default
				this.pokemon.back = response.data.sprites.back_default
			})
	},
	data() {
		return {
			pokemon: {
				type: null,
				front: null,
				back: null
			}
		}
	},
	props: {
		name: String,
		url: String,
		num: Number
	},
	filters: {
		upper: function(pokemonName) {
			let primeiraLetraFormatada = pokemonName[0].toUpperCase()
			let restanteCorpo = pokemonName.slice(1)
			return primeiraLetraFormatada + restanteCorpo
		}
	}
	
}
</script>

<style>
	.pokemon {
		margin-bottom: 15px;
	}
</style>