<script>
	import ArrowLeft from 'carbon-icons-svelte/lib/Add.svelte';
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
		},

	];
	// export let data;
</script>

<div class="lg:px-4 py-8">
	<!-- <button class="btn-square btn">
		<ArrowLeft size={16}/>

	</button> -->

	<div
		class=" prose-blue prose mx-auto flex flex-col  items-center rounded-t-2xl bg-neutral-200 px-6 py-8  lg:max-w-7xl lg:px-8"
	>
		<div class="mx-auto flex w-full max-w-3xl flex-col text-left">
			<div class="mx-auto w-full ">
				<h1 class="text-neutral-800">Here is your result.</h1>
				<!-- <h2>A small headline to switch your visitors into users.</h2> -->
				<p class="text-neutral-700">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
					industries for previewing layouts and visual mockups.
				</p>
			</div>

			<div class="flex flex-row justify-between">
				<div class=" h-[110px]  w-[150px] rounded-2xl  bg-white ">
					<img
						src="./images/georgia/parties/georgian_dream.svg"
						class="mx-auto w-12 mt-4 rounded-full "
						alt=""
					/>
					<h3 class="mx-auto -mt-6 mb-4 text-center font-bold text-sm text-neutral-800">Georgian dream</h3>
				</div>

				<div class=" h-[110px]  w-[150px] rounded-2xl  bg-white ">
					<img
						src="./images/georgia/parties/georgian_dream.svg"
						class="mx-auto w-12 mt-4 rounded-full "
						alt=""
					/>
					<h3 class="mx-auto -mt-6 mb-4 text-center font-bold text-sm text-neutral-800">Georgian dream</h3>
				</div>
			</div>
		</div>
	</div>
	<div class=" bg-white  p-6 ">
		{#each report as data}
			<StatLine title={data.title} resultsProcents={data.resultsProcents} />
		{/each}
	</div>
</div>
