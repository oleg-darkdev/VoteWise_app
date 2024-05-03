<script>
	import { Quiz, Faq, Hero, Result, Team, Footer } from '$lib/widgets';

	let startQuiz = false,
		quizStep = 0;
</script>

<section
	class=" flex min-h-screen w-full flex-col items-center justify-center bg-neutral-100  py-12  lg:py-24"
>
	{#if !startQuiz}
		<Hero bind:startQuiz />

		<Faq />

		<Team />
	{:else}
		<Quiz bind:quizStep>
			<Result bind:startQuiz bind:quizStep />
		</Quiz>
	{/if}
</section>

<Footer />
