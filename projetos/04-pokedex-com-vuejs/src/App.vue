<template>
  <div id="app">
		<img src="./assets/logo.png" alt="Logo do Vue" title="Este é um projeto que utiliza o framework Vue JS.">
		<hr>
		<h1 class="is-size-1">Pokedex</h1>
		<div class="column is-half is-offset-one-quarter">
			<input class="input is-success is-rounded is-small mb-2" type="text" placeholder="Buscar pokemon pelo nome" v-model="busca">
			<button class="button is-rounded is-dark is-small is-outlined is-fullwidth" @click="buscar">Buscar</button>

			<div class="pokemons" v-for="(pokemon, index) in filteredPokemons" :key="pokemon.url">
				<Pokemon :name="pokemon.name" :url="pokemon.url" :num="index + 1" />
			</div>
		</div>
  </div>
</template>

<script>
// Componentes
import Pokemon from './components/Pokemon'

// Bibliotecas
import axios from 'axios'

export default {
  name: 'App',
	data() {
		return {
			pokemons: [],
			filteredPokemons: [],
			busca: ''
		}
	},
	components: {
		Pokemon
	},

	// A função created é uma função que é chamada na criação deste componente (App.vue). Ela existe em todos os componentes.
	created: function() {

		/*
		API que retornará somente os pokémons da primeira geração, devido 
		a uma limitação da própria API.
		*/
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
			.then(dados => {
				this.pokemons = dados.data.results
				this.filteredPokemons = dados.data.results
				console.log('Lista de pokemons pega com sucesso.')
			})
			.catch(error => {
				console.log(error)
			})
	},
	/*
	Para quando a busca era feita a medida que o usuário digitava o nome.
	computed: {
		resultadoBusca: function() {
			if (this.busca) {
				return this.pokemons.filter(pokemon => pokemon.name == this.busca)
			} else {
				return this.pokemons
			}
		}
	},
	*/
	methods: {
		buscar: function() {
				if (this.busca) {
					this.filteredPokemons = this.pokemons.filter(pokemon => {
						return pokemon.name == this.busca
					})
				} else {
					this.filteredPokemons = this.pokemons
				}
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
