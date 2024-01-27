<script>
	import { Quiz, Faq, Hero, Result } from '$lib/widgets';

	let startQuiz = true;
</script>

<section
	class=" flex h-screen w-full flex-col items-center justify-center bg-neutral-100  py-12  lg:py-24"
>
	{#if !startQuiz}
		<Hero />

		<Faq />
	{:else}
		<Quiz>
			<Result />
		</Quiz>
	{/if}
</section>
