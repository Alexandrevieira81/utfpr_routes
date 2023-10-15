<script>
	import { goto } from '$app/navigation';

	import { buscarRotas, buscarAllRotas } from '../services/rotas.js';

	let returnRotas;
	let rotaReturn = [];
	let buscaRotas = {};

	const rota = async () => {
		returnRotas = null;

		let post = { ...buscaRotas };

		//post.password = md5(post.password);

		returnRotas = await buscarRotas(post);
		console.log(returnRotas);
		if (returnRotas.status == 200) {
			rotaReturn = await returnRotas.data.rota;
			document.getElementById('resultado').innerHTML = returnRotas.data.message;

			console.log(rotaReturn);
		} else {
			document.getElementById('resultado').innerHTML = returnRotas.data.message;
		}
	};

	const allRota = async () => {
		returnRotas = null;

		let postr = { ...buscaRotas };

		//post.password = md5(post.password);

		returnRotas = await buscarAllRotas(postr);
		console.log(returnRotas);
		if (returnRotas.status == 200) {
			rotaReturn = await returnRotas.data;

			console.log(rotaReturn);
		}
	};

	const desenharRota = async (segmentos) => {
		let canva = document.getElementById("rotaCanvas");
		let ctx = canva.getContext('2d');
		var x = 75;
		var y = 150;

		ctx.fillStyle = '#000';

		ctx.moveTo(75,150);

		for (let i = 0; i < segmentos.length; i++) {
			if (segmentos[i].direcao === 'frente') {
				y = y - segmentos[i].distancia;
			}

			if (segmentos[i].direcao === 'direita') {
				x = x + segmentos[i].distancia;
			}
			if (segmentos[i].direcao === 'esquerda') {
				x = x - segmentos[i].distancia;
			}

			console.log(segmentos[i].direcao);
			console.log('y  ....' + y);
			console.log('x  ....' + x);

			ctx.lineTo(x, y);

			ctx.lineWidth = 5;
			ctx.stroke();

			/* 	if (segmentos[i].direcao == 'frente') {
				ctx.fillStyle = '#000';
				ctx.fillRect(0, 0, 100, 100);
			}

			if (segmentos[i].direcao == 'direita') {
				ctx.fillStyle = 'rgba(255,0,0,0.5)';
				ctx.fillRect(10, 10, 100, 100);
			}
			if (segmentos[i].direcao == 'esquerda') {
				ctx.fillStyle = '#180874';
				ctx.fillRect(50, 50, 100, 100);
			} */
		}
		/*
		if (segmento.direcao == 'frente') {
	 		ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, 100, 100);
		}

		if (segmento.direcao == 'direita') {
			ctx.fillStyle = 'rgba(255,0,0,0.5)';
			ctx.fillRect(10, 10, 100, 100);
		}
		if (segmento.direcao == 'esquerda') {
			ctx.fillStyle = '#180874';
			ctx.fillRect(50, 50, 100, 100);
		}
 */
	};
</script>

<section class="telarotas">
	<div class="telarotas_wrapper rotas">
		<h1>Welcome to the Jungle</h1>
		<p style="margin-top: 2px;">INICIO:</p>
		<input type="text" name="" id="" placeholder="Portaria" bind:value={buscaRotas.origem} />

		<p style="margin-top: 20px;">FIM:</p>
		<input
			type="text"
			name=""
			id=""
			style="margin-top: 2px;"
			placeholder="Capela"
			bind:value={buscaRotas.destino}
		/>
	</div>
	{desenharRota(rotaReturn)}
	<table
		class="table table-bordered table-striped"
		width="100%"
		style="box-shadow: 0 10px 40px #00000056;"
	>
		<thead>
			<tr>
				<!-- <th class="text-center">nome_rota</th> -->
				<th class="text-center">nome</th>
				<th class="text-center">distancia</th>
				<th class="text-center">partida</th>
				<th class="text-center">chegada</th>
				<th class="text-center">direcao</th>
			</tr>
		</thead>
		<tbody>
			{#each rotaReturn as rotai, i (rotai)}
				<tr>
					<!-- <td class="text-center">{rotai.nome_rota}</td> -->
					<td class="text-center">{rotai.nome}</td>
					<td class="text-center">{rotai.distancia}</td>
					<td class="text-center">{rotai.ponto_inicial}</td>
					<td class="text-center">{rotai.ponto_final}</td>
					<td class="text-center">{rotai.direcao}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<canvas id="rotaCanvas" width="150" height="150">
		<p>Teste</p>
	</canvas>

	<h2>
		<p id="resultado" />
	</h2>

	<div>
		<button class="button" on:click={() => rota()}>Buscar Rota</button>
	</div>

	<!-- 
			<div>
			<button class="button" on:click={() => allRota()}>Buscar todas as Rotas</button>
		</div>
		-->

	<div>
		<a href="/centralizadora">Voltar</a>
	</div>
</section>

<style>
	#rotaCanvas {
		border: 1px solid #000;
	}
</style>
