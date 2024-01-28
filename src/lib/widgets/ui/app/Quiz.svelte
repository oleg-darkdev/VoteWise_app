<script>
	import { questions } from '$lib/shared';
	import { fly } from 'svelte/transition';


	export let quizStep;
</script>

<!-- <div class="flex flex-col w-full mx-auto mb-2 ">

        <h1>Page transitions are a fundamental part of website navigation and user experience.</h1>
        <p>Through the lens of a set of certitudes based on deductions founded on false premise.</p>
        <p>Turd polishing put a record on and see who dances, dog and pony show, nor one-sheet. Ensure to follow requirements when developing solutions three-martini lunch, that jerk from finance really threw me under the bus. Bob called an all-hands this afternoon.</p>
        <p>We've got kpis for that this is a no-brainer viral engagement pixel pushing. Run it up the flagpole please use "solutionise" instead of solution ideas! :) dunder mifflin form without content style without meaning target rich environment. Three-martini lunch. Get buy-in prioritize these line items, or deliverables yet back to the drawing-board let's put a pin in that, close the loop. Manage expectations product market fit win-win-win. The horse is out of the barn poop, but can you put it on my calendar? but drink from the firehose, but quick-win.</p>
        <h1>"Focus on the customer journey"</h1>
        <p>If you could do that, that would be great this is a no-brainer, or Q1 regroup. Groom the backlog what do you feel you would bring to the table if you were hired for this position. Back of the net. Scope creep can you slack it to me? shotgun approach build on a culture of contribution and inclusion please advise soonest.</p>
        <h3>Is a no-brainer, or Q1 regroup.</h3>
        <p>Gain traction make it more corporate please we need to harvest synergy effects not enough bandwidth, and we want to empower the team with the right tools and guidance to uplevel our craft and build better nor low-hanging fruit the right info at the right time to the right people.</p>
    </div> -->

<div
	in:fly={{ x: 50, duration: 2000 }}
	out:fly={{ x: -50, duration: 10 }}
	class="h-screen max-w-3xl"
>
	{#if questions.length > quizStep}
	<div class="prose-md prose flex flex-col px-8  text-left ">
		<div class="mx-auto mb-2 w-[160px] border-b border-gray-200">
			<div class="-mt-2 flex flex-wrap items-baseline justify-center text-neutral-700">
				<h5 class="">Question</h5>
				<p class="mt-1 ml-2">{questions[quizStep].id} / {questions.length}</p>
			</div>
		</div>
		{#each questions as question, i}
			{#if i == quizStep}
				<h3
					in:fly={{ x: 50, duration: 2000 }}
					out:fly={{ x: -50, duration: 10 }}
					class="mt-4 text-center text-3xl font-bold text-gray-800"
				>
					{question.title}
				</h3>
			{/if}
		{/each}
		<div class="absolute left-0 bottom-6 flex w-full flex-col content-center">
			<button
				on:click={() => {
					quizStep = quizStep + 1;
				}}
				class="btn-outline btn-primary btn-wide btn mx-auto mb-4"
				>{questions[quizStep].options.agree.text}</button
			>
			<button
				on:click={() => {
					quizStep = quizStep + 1;
				}}
				class="btn-outline btn-primary  btn-wide btn mx-auto"
				>{questions[quizStep].options.disagree.text}</button
			>

			<div class="mx-auto p-8">
				<button
					on:click={() => (quizStep = quizStep + 1)}
					class="mt-4   inline-flex items-center font-thin text-neutral-800 hover:text-neutral-600 lg:mb-0"
				>
					Skip this question »
				</button>
			</div>
		</div>
	</div>
	{/if}

	{#if questions.length == quizStep}
		<slot />
	{/if}
</div>
