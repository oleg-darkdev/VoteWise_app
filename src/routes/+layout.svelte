<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
  
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="">
	<slot />
</main>

<style>

</style>
