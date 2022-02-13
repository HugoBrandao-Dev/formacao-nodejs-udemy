<template>
	<form>
		<label>Email:</label>
		<input type="email" name="email" id="iptEmail" placeholder="Informe seu email">
		<label>Nome:</label>
		<input type="text" name="nome" id="iptNome" placeholder="Informe seu nome">
		<button>Teste</button>
	</form>
</template>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 200px;
	}
	form input {
		width: 100%;
		margin-bottom: 10px;
	}
	form label {
		align-self: flex-start;
	}
</style>