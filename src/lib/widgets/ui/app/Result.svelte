<script>
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';

	import { StatLine } from '$lib/shared';
	import { fly } from 'svelte/transition';

	const report = [
		{
			title: 'Economic issues',
			resultsProcents: [86, 20]
		},
		{
			title: 'Social issues',
			resultsProcents: [43, 57]
		},
		{
			title: 'Political issues',
			resultsProcents: [21, 79]
		}
	];

	let showPopUp = false;

	export let startQuiz;
</script>

<div
	class="max-w-5xl lg:py-8 lg:px-4"
	in:fly={{ x: 50, duration: 2000 }}
	out:fly={{ x: -50, duration: 10 }}
>
	<div
		class=" prose-blue prose mx-auto  items-center rounded-t-2xl bg-neutral-200 px-6 py-8   lg:px-8"
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
					<span class="font-bold">Following 3 issues</span> show which electoral program of the political party is closest to you
				</p>
			</div>
			{#if !showPopUp}
				<div class="flex flex-row justify-between">
					<div
						class=" h-[110px]  w-[145px] rounded-2xl bg-white  hover:bg-neutral-100  md:w-[165px] lg:w-[165px]"
					>
						<img
							src="./images/georgia/georgian_dream.png"
							class="mx-auto mt-4 w-8 rounded-full "
							alt=""
						/>
						<h3 class="mx-auto -mt-6 mb-4 text-center text-sm font-bold text-neutral-800">
							Georgian dream <br class="hidden lg:block" />

							<div class="mx-auto mt-2 flex max-w-[80px] flex-row justify-center">
								<button
									on:click={() => (showPopUp = !showPopUp)}
									class="-mt-1 mr-2 font-normal text-blue-700"
									>details
								</button>
								<ChevronRight fill="#1d4ed8" size={16} class="" />
							</div>
						</h3>
					</div>

					<div
						class=" h-[110px]  w-[145px] rounded-2xl bg-white hover:bg-neutral-100  md:w-[165px] lg:w-[165px]"
					>
						<img
							src="./images/georgia/united_national_movement.png"
							class="mx-auto mt-4 w-8 rounded-full "
							alt=""
						/>
						<h3 class="mx-auto -mt-6 mb-4 text-center text-sm font-bold text-neutral-800">
							<!-- United National Movement -->
							U.N.M.
							<br class="hidden lg:block" />

							<div class="mx-auto mt-2 flex max-w-[80px] flex-row justify-center">
								<button
									on:click={() => (showPopUp = !showPopUp)}
									class="-mt-1 mr-2 font-normal text-blue-700"
									>details
								</button>
								<ChevronRight fill="#1d4ed8" size={16} class="" />
							</div>
						</h3>
					</div>
				</div>
			{:else}
				<div class="flex w-full flex-row rounded-t-2xl bg-white px-4">
					<img
						src="./images/georgia/georgian_dream.png"
						class=" mt-4 w-16 rounded-full mr-4"
						alt=""
					/>
					<div class="prose-blue prose pt-3">
						<h3 class=" text-center text-md font-bold text-neutral-800">
							Georgian dream
						</h3>
						<span class='-mt-4'>since 2010</span>
					</div>
				</div>
			{/if}
		</div>
	</div>
	{#if !showPopUp}
		<div class=" bg-white  p-4 ">
			{#each report as data}
				<StatLine title={data.title} resultsProcents={data.resultsProcents} />
			{/each}
		</div>
	{/if}
</div>
