<script>
	import { faqContent } from '$lib/shared';
	import { fly, fade } from 'svelte/transition';

	import { onMount } from 'svelte';
	let showFaq = false;
	onMount(() => {
		showFaq = true;
	});
</script>

{#if showFaq}
	<div class=" prose-blue  prose w-full  max-w-2xl px-2">
		{#each faqContent as faq, i}
			<div
				in:fly={{ y: 50, duration: 2000 }}
				out:fly={{ x: -50, duration: 10 }}
				on:click={() => {
					faq.showFaq = !faq.showFaq;
				}}
				class="mb-1 w-full rounded-2xl bg-neutral-300 px-4 py-1 text-neutral-800"
			>
				<h2 class="w-full text-xl mt-2 font-medium text-neutral-700">
					{faq.question}
				</h2>

				{#if faq.showFaq}
					<div
						in:fly={{ y: 10, duration: 2000 }}
						out:fly={{ y: 10, duration: 1000 }}
						class="ml-6 w-full"
					>
						<p class="font-bold text-neutral-800 ">
							{faq.answer}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}
