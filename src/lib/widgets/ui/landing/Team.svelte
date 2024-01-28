<script>
	const team = [
		{
			fullName: 'Davit Totadze',
			position: 'President of the Human Rights Research Center (HRRC)',
			workplace: '',
			link: 'https://www.linkedin.com/in/davitotadze?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			photo: 'david.png'
		},
		{
			fullName: 'Oleg Medvedev',
			position: 'Frontend developer / Founder of 44Games',
			workplace: '',
			link: 'https://www.linkedin.com/in/oleg-darkdev',
			photo: 'oleg.png'
		},
		{
			fullName: 'Nika Pkhovelishvili',
			position: 'Product designer in TBC Bank',
			workplace: '',
			link: 'https://www.linkedin.com/in/nickolozp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			photo: 'miko.png'
		}
	];
</script>

<section>
	<div class="mt-10 ">
		<h3 class="text-center text-2xl font-semibold leading-6 text-gray-800">Our team</h3>
	</div>

	<div class="relative mx-auto -mt-6 max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
			{#each team as member}
				<div class="mb-6 flex cursor-pointer flex-col overflow-hidden">
					<a href={member.link}>
						<div class="flex-shrink-0">
							<img
								class="h-48 w-full rounded-lg object-cover"
								src="./images/team/{member.photo}"
								alt=""
							/>
						</div>
					</a>
					<div class="flex -mt-2 flex-1 flex-col justify-between">
						<a href={member.link} />
						<div class="flex-1">
							<a href={member.link}>
								<div class="flex space-x-1 pt-6 text-sm text-gray-500">
									<span>{member.position} </span>
								</div>
							</a>
							<a href="#" class="mt-2 block space-y-6">
								<h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
									{member.fullName}
								</h3>
								<!-- <p class="text-lg font-normal text-gray-500">
									Filling text so you can see how it looks like with text. Did I said text?
								</p> -->
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
