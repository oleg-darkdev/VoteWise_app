<script>
	export let title, resultsProcents;
</script>

<div
	class="prose-blue prose mb-4 w-full rounded-2xl border-2 border-neutral-200 px-4 py-6 hover:bg-neutral-50 lg:w-full"
>
	<h3 class="text-2xl text-neutral-800">{title}</h3>

	<div class="mb-8 flex h-6 flex-row items-center">
		<div class="avatar mr-4">
			<img
				src="./images/georgia/georgian_dream.png"
				class="mx-auto mt-4 w-12 rounded-full "
				alt=""
			/>
		</div>
		<progress class="progress progress-primary mr-4 w-full" value={resultsProcents[0]} max="100" />
		<p class="text-2xl font-thin text-neutral-800">{resultsProcents[0]}%</p>
	</div>

	<div class="mb-4 flex h-6 flex-row items-center">
		<div class="avatar mr-4">
			<img
						src="./images/georgia/united_national_movement.png"
				class="mx-auto mt-4 w-12 rounded-full "
				alt=""
			/>
		</div>
		<progress class="progress progress-primary mr-4 w-full" value={resultsProcents[1]} max="100" />
		<p class="text-2xl font-thin text-neutral-800">{resultsProcents[1]}%</p>
	</div>
</div>
