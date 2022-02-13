<template>
  <div id="app">
    <div id="nav">
			<!-- Funcionam como a tag <a>, criando link para o roteamento -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
			<router-link to="/cadastro">Cadastro</router-link>
    </div>
		<!-- Esse componente é reponsável por renderizar um conteúdo de rotas -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
