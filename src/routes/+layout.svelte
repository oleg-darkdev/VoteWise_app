<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';

	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<svelte:head>
	<title>VoteWise in Georgia</title>
</svelte:head>

<main class="">
	<slot />
</main>

<style>

</style>
