<template>
  <div id="divRegister">
		<h1 class="title is-1">Registro de usuário</h1>
		<hr>
		<form>
			<div class="columns is-mobile is-centered">
				<div class="column is-half">
					<label>Nome</label>
					<input type="text" name="iptNome" class="input mb-3" placeholder="Informe seu nome">
					<label>E-mail</label>
					<input type="email" name="iptEmail" class="input mb-3" placeholder="exemplo@email.com">
					<label>Senha</label>
					<input type="password" name="iptPassword" class="input">
					<hr>
					<button type="button" class="button is-success">Cadastrar</button>
				</div>
			</div>
		</form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
