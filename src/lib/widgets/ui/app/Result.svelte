<script>
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import { StatLine } from '$lib/shared';

	const report = [
		{
			title: 'Economics',
			resultsProcents: [86, 20]
		},
		{
			title: 'Social',
			resultsProcents: [86, 20]
		},
		{
			title: 'Political',
			resultsProcents: [86, 20]
		}
	];
  
	export let startQuiz;
</script>

<div class="lg:py-8 lg:px-4">
	<div
		class=" prose-blue prose mx-auto  items-center rounded-t-2xl bg-neutral-200 px-6 py-8  lg:max-w-7xl lg:px-8"
	>
		<button
			on:click={() => {
				startQuiz = !startQuiz;
			}}
			class="mb-6 h-10 w-10 rounded-2xl bg-white p-1"
		>
			<ArrowLeft fill="bg-gray-800" size={18} class="mx-auto" />
		</button>

		<div class="mx-auto flex w-full max-w-3xl flex-col text-left">
			<div class="mx-auto w-full ">
				<h1 class="mb-0 text-neutral-800">Here is your result.</h1>
				<!-- <h2>A small headline to switch your visitors into users.</h2> -->
				<p class="text-neutral-700">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
					industries for previewing layouts and visual mockups.
				</p>
			</div>

			<div class="flex flex-row justify-between">
				<div class=" h-[110px]  w-[165px] rounded-2xl  bg-white ">
					<img
						src="./images/georgia/parties/georgian_dream.svg"
						class="mx-auto mt-4 w-12 rounded-full "
						alt=""
					/>
					<h3 class="mx-auto -mt-6 mb-4 text-center text-sm font-bold text-neutral-800">
						Georgian dream
					</h3>
				</div>

				<div class=" h-[110px]  w-[165px] rounded-2xl  bg-white ">
					<img
						src="./images/georgia/parties/georgian_dream.svg"
						class="mx-auto mt-4 w-12 rounded-full "
						alt=""
					/>
					<h3 class="mx-auto -mt-6 mb-4 text-center text-sm font-bold text-neutral-800">
						Georgian dream
					</h3>
				</div>
			</div>
		</div>
	</div>
	<div class=" bg-white  p-4 ">
		{#each report as data}
			<StatLine title={data.title} resultsProcents={data.resultsProcents} />
		{/each}
	</div>
</div>
