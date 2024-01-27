<script>
	export let startQuiz;
</script>

<div class="mb-28 flex   w-full  max-w-7xl flex-col text-center lg:mb-20">
	<div
		class="mx-auto mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-blue-600"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-aperture h-10 w-10"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="9" />
			<line x1="3.6" y1="15" x2="14.15" y2="15" />
			<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
			<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
			<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
			<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
		</svg>
	</div>
	<h1
		class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-7xl lg:text-6xl"
	>
		Lorem ipsum <br class="hidden lg:block" />
		is placeholder
	</h1>

	<p class="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>

	<div class="mx-auto mt-6 flex w-full max-w-4xl justify-center gap-2">
		<div class="mt-3 rounded-lg sm:mt-0">
			<button
				on:click={() => (startQuiz = !startQuiz)}
				class="transform rounded-xl bg-blue-600 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:px-10"
				>Start the quiz</button
			>
		</div>
	</div>
	<!-- <a
			class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
			title="read more"
		>
			Read more about the offer »
		</a> -->
</div>
