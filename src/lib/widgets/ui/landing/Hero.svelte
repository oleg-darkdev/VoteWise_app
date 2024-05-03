<script>
	import { fly } from 'svelte/transition';


	export let startQuiz;
</script>

<div  class="mb-28 flex   w-full  max-w-7xl flex-col text-center lg:mb-20">
	<!-- <div
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
	</div> -->
  <strong>Get out and</strong>
<!-- <h1>VoteWise</h1> -->

<!-- <a class="c-btn" href="https://www.google.com/" target="_blank">Find A Voting Location</a> -->
<div class="backgroundcliptext">
	<h1
		class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-7xl lg:text-6xl"
	>
		VoteWise  <br class="hidden lg:block" />
    <!-- Georgia  -->
	</h1>
  </div>

	<p class="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
		The VoteWise is not a voting recommendation, but rather an information offering about elections and politics.
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


<style>
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');


@keyframes rotateRWB {
  0% {
    background-position: 0em 0em;
  }
  100% {
    background-position: 100em 100em;
  }
}
/* body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e5e5e5;
} */

h1, h2, h3, h4, h5, h6, strong {
  color: #3498db;
}

strong {
  /* font-family: "Work Sans", sans-serif; */
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1em;
  margin-left: 2em;
}


h1, h2, h3, h4, h5, h6 {
  font-family: "Shrikhand", cursive;
  margin: 0;
  font-size: calc(800% + 1vmin);
  line-height: 110%;
  padding: 0 1em;
}
.backgroundcliptext h1, .backgroundcliptext h2, .backgroundcliptext h3, .backgroundcliptext h4, .backgroundcliptext h5, .backgroundcliptext h6 {
  background: #e74c3c;
  background: linear-gradient(to bottom, #3498db 0%, #3498db 33%, #fff 33%, #fff 66%, #e74c3c 66%, #e74c3c 100%);
  background-repeat: repeat;
  background-size: 100% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: rotateRWB 100s linear 1s 1000;
}

.c-btn {
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  border: 1px solid #3498db;
  border-radius: 3px;
  display: inline-block;
  padding: 0.5em 1em;
  line-height: 1em;
  text-decoration: none;
  color: #3498db;
  margin-left: 1em;
  background: #fff;
  transition: 0.3s all ease-in-out;
}
.c-btn:hover {
  background: #3498db;
  color: #fff;
}
</style>
