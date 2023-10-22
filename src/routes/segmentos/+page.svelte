<script>
	import { buscarSegmentos, cadastrarSegmento } from '../services/segmentos.js';
	import { buscarPontos, cadastrarPonto } from '../services/pontos.js';
	import { onMount } from 'svelte';

	let returnSegmentos;
	let segmentoReturn = [];

	let segmentosCadastrado;
	let dadosSegmentos = {};

	let pontoCadastrado;
	let dadosPonto = {};

	let returnPontos;
	let pontosReturn = [];

	onMount(async () => {
		ponto();
	});

	const inserirSegmento = async () => {
		segmentosCadastrado = null;

		let post = { ...dadosSegmentos };

		const inicial = document.querySelector('#pontosIniciais');
		const final = document.querySelector('#pontosFinais');

		//post.password = md5(post.password);

		post.ponto_inicial = inicial.value;
		post.ponto_final = final.value;

		console.log('Dentro do Post ', post);

		segmentosCadastrado = await cadastrarSegmento(post);

		if (segmentosCadastrado.status == 200) {
			document.getElementById('resultado').innerHTML = segmentosCadastrado.data.message;
		} else {
			document.getElementById('resultado').innerHTML = segmentosCadastrado.data.message;
		}
	};

	const inserirPonto = async () => {
		pontoCadastrado = null;

		let post = { ...dadosPonto };

		//post.password = md5(post.password);

		console.log('Dentro do Post Ponto', post);

		pontoCadastrado = await cadastrarPonto(post);

		if (pontoCadastrado.status == 200) {
			document.getElementById('resultado').innerHTML = pontoCadastrado.data.message;
		} else {
			document.getElementById('resultado').innerHTML = pontoCadastrado.data.message;
		}
	};

    const atualizarPonto = async (ponto) => {
        console.log(ponto," Pegou o atualizar");
    }
    const deletarPonto = async (id) => {
        console.log(id," Pegou o deletar");
    }

    

    

	const segmento = async () => {
		returnSegmentos = null;
		returnSegmentos = await buscarSegmentos();
		console.log(returnSegmentos);
		if (returnSegmentos.status == 200) {
			segmentoReturn = await returnSegmentos.data.segmentos;
			document.getElementById('resultadoSegmentos').innerHTML = returnSegmentos.data.message;
			document.getElementById('resultadoSegmentos').style.color = 'blue';
		} else {
			document.getElementById('resultadoSegmentos').innerHTML = returnSegmentos.data.message;
			document.getElementById('resultadoSegmentos').style.color = 'red';
		}
	};

	const ponto = async () => {
		returnPontos = null;
		returnPontos = await buscarPontos();

		if (returnPontos.status == 200) {
			console.log(returnPontos.data.pontos);
			pontosReturn = await returnPontos.data.pontos;
			document.getElementById('resultadoPontos').innerHTML = returnPontos.data.message;
			document.getElementById('resultadoPontos').style.color = 'green';
			console.log(pontosReturn);
		} else {
			document.getElementById('resultadoPontos').style.color = 'red';
			document.getElementById('resultadoPontos').innerHTML = returnPontos.data.message;
		}
		prencherPontosIniciais(pontosReturn);
		prencherPontosFinais(pontosReturn);
	};

	const prencherPontosIniciais = async (pontos) => {
		var selectPontos = document.getElementById('pontosIniciais');
		var option;
		for (var i = 0; i < pontos.length; i++) {
			option = document.createElement('option');
			option.value = pontos[i].id;
			option.text = pontos[i].nome;
			selectPontos.appendChild(option);
		}
	};
	const prencherPontosFinais = async (pontos) => {
		var selectPontos = document.getElementById('pontosFinais');
		var option;
		for (var i = 0; i < pontos.length; i++) {
			option = document.createElement('option');
			option.value = pontos[i].id;
			option.text = pontos[i].nome;
			selectPontos.appendChild(option);
		}
	};
</script>

<h1>SEGMENTOS</h1>
<h2>
	<p id="resultado" style="margin-left: 20px;" />
</h2>

<p style="margin-top: 2px;">Distância:</p>
<input type="text" name="" id="registro" bind:value={dadosSegmentos.distancia} />

<p style="margin-top: 20px;">Direção:</p>
<input type="text" name="" id="nome" style="margin-top: 2px;" bind:value={dadosSegmentos.direcao} />

<p style="margin-top: 20px;">Status:</p>
<input
	type="number"
	name=""
	id="email"
	style="margin-top: 2px;"
	bind:value={dadosSegmentos.status}
/>

<div style="margin-top: 20px;">
	<select name="" id="pontosIniciais" />
	<select name="" id="pontosFinais" />
</div>

<div style="margin-top: 20px;">
	<button class="button" id="btnCadastrar" type="button" on:click={() => inserirSegmento()}
		>Cadastrar</button
	>
</div>

<h3>Cadastro de Ponto</h3>

<div style="margin-top: 20px;">
	<p style="margin-top: 2px;">Origem:</p>
	<input type="text" name="" id="registro" bind:value={dadosPonto.nome} />

	<div style="margin-top: 20px;">
		<button class="button" id="btnCadastrar" type="button" on:click={() => inserirPonto()}
			>Cadastrar</button
		>
	</div>
</div>

<h2>
	<p id="resultadoSegmentos" style="margin-left: 20px;" />
</h2>

<div style="margin: 20px 20px 20px 20px;">
	<table
		id="tableSegmentos"
		class="table table-bordered table-striped"
		width="100%"
		style="box-shadow: 0 10px 40px #00000056;"
	>
		<thead>
			<tr>
				<!-- <th class="text-center">nome_rota</th> -->
                <th class="text-center">Código</th>
				<th class="text-center">distancia</th>
				<th class="text-center">partida</th>
				<th class="text-center">chegada</th>
				<th class="text-center">direcao</th>
				<th class="text-center">status</th>
			</tr>
		</thead>
		<tbody>
			{#each segmentoReturn as segmentoi}
				<tr>
					<!-- <td class="text-center">{rotai.nome_rota}</td> -->
                    <td class="text-center">{segmentoi.id}</td>
					<td class="text-center">{segmentoi.distancia}</td>
					<td class="text-center">{segmentoi.ponto_inicial}</td>
					<td class="text-center">{segmentoi.ponto_final}</td>
					<td class="text-center">{segmentoi.direcao}</td>
					<td class="text-center">{segmentoi.status}</td>
					<td class="text-center"
						><button class="button" on:click={() => atualizarPonto(segmentoi)}>Atualizar</button></td
					>
					<td class="text-center"
						><button class="button" on:click={() => deletarPonto(segmentoi.id)}>Deletar</button></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div>
	<button style="margin-left: 20px;" class="button" on:click={() => segmento()}
		>Buscar Segmentos</button
	>
</div>

<h2>
	<p id="resultadoPontos" style="margin-left: 20px;" />
</h2>

<div style="margin: 20px 20px 20px 20px;">
	<table
		class="table table-bordered table-striped"
		width="100%"
		style="box-shadow: 0 10px 40px #00000056;"
		id="tablePontos"
	>
		<thead>
			<tr>
				<!-- <th class="text-center">nome_rota</th> -->

				<th class="text-center">Código</th>
				<th class="text-center">Nome</th>
			</tr>
		</thead>
		<tbody>
			{#each pontosReturn as pontoi}
				<tr>
					<!-- <td class="text-center">{rotai.nome_rota}</td> -->

					<td class="text-center">{pontoi.id}</td>
					<td class="text-center">{pontoi.nome}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div>
	<button style="margin-left: 20px;" class="button" on:click={() => ponto()}>Buscar Pontos</button>
</div>
