<template>
  <div id="app">
    <div class="pokemons" v-for="(pokemon, index) in pokemons" :key="index">
			<Pokemon :name="pokemon.name" :url="pokemon.url" :num="index + 1" />
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
			pokemons: []
		}
	},
	components: {
		Pokemon
	},

	// A função created é uma função que é chamada na criação deste componente (App.vue). Ela existe em todos so componentes.
	created: function() {

		/*
		API que retornará somente os pokémons da primeira geração, devido 
		a uma limitação da própria API.
		*/
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
			.then(dados => {
				this.pokemons = dados.data.results
				console.log('Lista de pokemons pega com sucesso.')
			})
			.catch(error => {
				console.log(error)
			})
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
