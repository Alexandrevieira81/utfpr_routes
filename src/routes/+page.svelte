
<script>
    import { goto } from '$app/navigation';

</script>

<h1>Welcome to SvelteKit</h1>
<button on:click={() => {goto("/login")}} type="button" class="btn text-white nav-link">Logar / Registrar</button>
<button on:click={() => {goto("/rotas")}} type="button" class="btn text-white nav-link">Ir para Rotas</button>
<button on:click={() => {goto("/user")}} type="button" class="btn text-white nav-link">Cadastro de usuários</button>

