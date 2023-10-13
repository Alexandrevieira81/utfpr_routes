<script>
	import { cadastrarUser, buscarUser, AtualizarUser, DeletarUser } from '../services/user.js';
	import { onMount } from 'svelte';
	import md5 from 'md5';

	let returnUser;
	//let userReturn = [];
	let user = {};
	let getId = {};

	onMount(async () => {
		let btnCadstrar = document.getElementById('btnCadastrar');
		btnCadstrar.disabled = true;
		let btnAtualizar = document.getElementById('btnAtualizar');
		btnAtualizar.disabled = true;
		let btnDeletar = document.getElementById('btnDeletar');
		btnDeletar.disabled = true;
	});

	const cadastrar = async () => {
		returnUser = null;

		let post = { ...user };
		post.senha = md5(post.senha);
		returnUser = await cadastrarUser(post);

		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
			let btnCadastrar = document.getElementById('btnCadastrar');
			btnCadastrar.disabled = false;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};

	const atualizar = async () => {
		returnUser = null;

		let post = { ...user };

		post.senha = md5(post.senha);

		returnUser = await AtualizarUser(post);
		console.log(returnUser);
		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
			let btnAtualizar = document.getElementById('btnAtualizar');
			btnAtualizar.disabled = true;
			let btnDeletar = document.getElementById('btnAtualizar');
			btnDeletar.disabled = true;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};

	const deletar = async () => {
		returnUser = null;

		let post = user.registro;
		let senha = prompt('Digite sua senha para confirmar');
		returnUser = await DeletarUser(post);
		console.log(returnUser);
		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
			let btnAtualizar = document.getElementById('btnAtualizar');
			btnAtualizar.disabled = true;
			let btnDeletar = document.getElementById('btnDeletar');
			btnDeletar.disabled = true;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};

	const buscar = async () => {
		returnUser = null;

		returnUser = await buscarUser(getId.registro);
		console.log(returnUser);
		if (returnUser.status == 200) {
			document.getElementById('resultado').innerHTML = returnUser.data.message;

			let registro = document.getElementById('registro');
			registro.value = returnUser.data.usuarios.registro;

			let nome = document.getElementById('nome');
			nome.value = returnUser.data.usuarios.nome;

			let email = document.getElementById('email');
			email.value = returnUser.data.usuarios.email;

			let senha = document.getElementById('senha');
			senha.value = '';

			let tipo = document.getElementById('tipo');
			tipo.value = returnUser.data.usuarios.tipo_usuario;

			let btnCadastrar = document.getElementById('btnCadastrar');
			btnCadastrar.disabled = true;
			let btnAtualizar = document.getElementById('btnAtualizar');
			btnAtualizar.disabled = false;
			let btnDeletar = document.getElementById('btnDeletar');
			btnDeletar.disabled = false;
		} else {
			document.getElementById('resultado').innerHTML = returnUser.data.message;
		}
	};

	const novo = async () => {
		let btnCadstrar = document.getElementById('btnCadastrar');
		btnCadstrar.disabled = false;
		let btnAtualizar = document.getElementById('btnAtualizar');
		btnAtualizar.disabled = true;
		let btnDeletar = document.getElementById('btnDeletar');
		btnDeletar.disabled = true;
		let registro = document.getElementById('registro');
		registro.value = '';
		let nome = document.getElementById('nome');
		nome.value = '';
		let email = document.getElementById('email');
		email.value = '';
		let senha = document.getElementById('senha');
		senha.value = '';
		let tipo = document.getElementById('tipo');
		tipo.value = '';
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
		<input type="text" name="" id="registro" bind:value={user.registro} />

		<p style="margin-top: 20px;">Nome:</p>
		<input type="text" name="" id="nome" style="margin-top: 2px;" bind:value={user.nome} />

		<p style="margin-top: 20px;">Email:</p>
		<input type="text" name="" id="email" style="margin-top: 2px;" bind:value={user.email} />

		<p style="margin-top: 20px;">Senha:</p>
		<input type="text" name="" id="senha" style="margin-top: 2px;" bind:value={user.senha} />

		<p style="margin-top: 20px;">Tipo de Usuário:</p>
		<input
			type="number"
			name=""
			id="tipo"
			style="margin-top: 2px;"
			bind:value={user.tipo_usuario}
		/>
	</div>

	<h2>
		<p id="resultado" />
	</h2>

	<div>
		<button class="button" id="btnNovo" type="button" on:click={() => novo()}>Novo</button>
		<button class="button" id="btnCadastrar" type="button" on:click={() => cadastrar()}
			>Cadastrar</button
		>
		<button class="button" id="btnAtualizar" type="button" on:click={() => atualizar()}
			>Atualizar</button
		>
		<button class="button" id="btnDeletar" type="button" on:click={() => deletar()}>Deletar</button>
	</div>
	<div>
		<a href="/centralizadora">Voltar</a>
	</div>
</section>

<style>
	.button {
		margin-top: 10px;
		margin-left: 45px;
	}
</style>
