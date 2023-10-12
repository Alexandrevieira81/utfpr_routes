<script>
	import { cadastrarUser } from '../services/user.js';

	let returnUser;
	let userReturn = [];
	let user = {};

	const cadastrar = async () => {
		returnUser = null;

		let post = { ...user };
		console.log(user);

		//post.password = md5(post.password);

		returnUser = await cadastrarUser(post);
		console.log(returnUser);
		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};
</script>

<section class="telaCadastroUsuario">
	<div class="telaCadastroUsuario_wrapper usuario">
		<h1>Welcome to the Jungle</h1>
		<p style="margin-top: 2px;">Registro:</p>
		<input type="text" name="" id="" placeholder="1488880" bind:value={user.registro} />

		<p style="margin-top: 20px;">Nome:</p>
		<input
			type="text"
			name=""
			id=""
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.nome}
		/>

		<p style="margin-top: 20px;">Email:</p>
		<input
			type="text"
			name=""
			id=""
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.email}
		/>

		<p style="margin-top: 20px;">Senha:</p>
		<input
			type="text"
			name=""
			id=""
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.senha}
		/>

		<p style="margin-top: 20px;">Tipo de Usuário:</p>
		<input
			type="number"
			name=""
			id=""
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.tipo_usuario}
		/>
	</div>

	<h2>
		<p id="resultado" />
	</h2>

	<div>
		<button class="button" on:click={() => cadastrar()}>Cadastrar</button>
	</div>
</section>

<style>
	.button {
		margin-top: 10px;
		margin-left: 45px;
	}
</style>
