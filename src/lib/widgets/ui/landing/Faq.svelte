<script>
  
</script>

<div class=" w-full  max-w-2xl">
	{#each faqContent as faq, i}
		<div
			on:click={() => {
				faq.showFaq = !faq.showFaq;
				console.log(faq.showFaq);
			}}
			class="collapse mb-1 w-full rounded-2xl bg-neutral-300 text-neutral-800"
		>
			<div class="collapse-title w-full text-xl font-medium">
				{faq.question}
			</div>

			{#if faq.showFaq}
				<div class="collapse-content w-full">
					<p>
						{faq.answer}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
