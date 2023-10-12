<script>
	import { cadastrarUser, buscarUser } from '../services/user.js';

	let returnUser;
	let userReturn = [];
	let user = {};
	let getId = {};

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

	const buscar = async () => {
		returnUser = null;

		console.log(user);

		//post.password = md5(post.password);

		returnUser = await buscarUser(getId.registro);
		console.log(returnUser);
		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
			let registro = document.getElementById('registro');
			registro.value = returnUser.data.usuarios.registro;
			registro.disabled = true;
			let nome = document.getElementById('nome');
			nome.value = returnUser.data.usuarios.nome;
			nome.disabled = true;
			let email = document.getElementById('email');
			email.value = returnUser.data.usuarios.email;
			email.disabled = true;
			let senha = document.getElementById('senha');
			senha.value = returnUser.data.usuarios.senha;
			senha.disabled = true;
			let tipo = document.getElementById('tipo');
			tipo.value = returnUser.data.usuarios.tipo_usuario;
			tipo.disabled = true;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};

	const novo = async () => {
		let senha = document.getElementById('senha');
		senha.disabled = false;
	};
</script>

<section class="telaCadastroUsuario">
	<div class="telaCadastroUsuario_wrapper usuario">
		<h1>Welcome to the Jungle</h1>

		<div>
			<input type="text" name="" id="buscarRegistro" bind:value={getId.registro} />

			<button class="button" on:click={() => buscar()}>Buscar</button>
		</div>

		<p style="margin-top: 2px;">Registro:</p>
		<input type="text" name="" id="registro" placeholder="1488880" bind:value={user.registro} />

		<p style="margin-top: 20px;">Nome:</p>
		<input
			type="text"
			name=""
			id="nome"
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.nome}
		/>

		<p style="margin-top: 20px;">Email:</p>
		<input
			type="text"
			name=""
			id="email"
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.email}
		/>

		<p style="margin-top: 20px;">Senha:</p>
		<input
			type="text"
			name=""
			id="senha"
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.senha}
		/>

		<p style="margin-top: 20px;">Tipo de Usuário:</p>
		<input
			type="number"
			name=""
			id="tipo"
			style="margin-top: 2px;"
			placeholder="123456"
			bind:value={user.tipo_usuario}
		/>
	</div>

	<h2>
		<p id="resultado" />
	</h2>

	<div>
		<button class="button" on:click={() => novo()}>Novo</button>
		<button class="button" id="btnCadstrar" on:click={() => cadastrar()}>Cadastrar</button>
	</div>
</section>

<style>
	.button {
		margin-top: 10px;
		margin-left: 45px;
	}
</style>
