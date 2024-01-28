<script>
	import { faqContent } from '$lib/shared';
	import { fly, fade } from 'svelte/transition';
	import ChevronuP from 'carbon-icons-svelte/lib/ChevronuP.svelte';
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';

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
				class="mb-1 w-full rounded-2xl bg-neutral-200  pt-1 text-neutral-800"
			>
				<div class="flex mb-2 flex-row content-center px-4">
					<h2 class="mt-2 mr-8 w-full text-xl font-medium text-neutral-700">
						{faq.question}
					</h2>
					{#if !faq.showFaq}
						<ChevronDown fill="bg-gray-700" size={24} class="mt-4 mx-auto" />
					{:else}
						<ChevronuP fill="bg-gray-700" size={24} class="mt-4 mx-auto" />
					{/if}
				</div>
				{#if faq.showFaq}
					<div
						in:fly={{ y: 10, duration: 2000 }}
						out:fly={{ y: 10, duration: 1000 }}
						class="-mt-3 pt-1 w-full px-4 pb-2 bg-neutral-300 rounded-b-2xl"
					>
						<p class="text-xl text-neutral-800 ">
							{faq.answer}
            </p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}
