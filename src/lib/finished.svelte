<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function reset() {
		dispatch('reset');
	}
</script>

<lottie-player
	src="finished.json"
	background="transparent"
	speed="1"
	class="2xl:w-1/3 lg:p-10"
	loop
	autoplay
/>
<div class="pt-8 pr-8 lg:p-16 w-2/3">
	<h3 class="text-4xl mb-4">All done!</h3>
	<p>Please stand by while we prepare and deliver your meal as soon as possible</p>
	<button on:click={reset} class="btn btn-primary btm-lg mt-4 ">Start over</button>
	<a href="/orders" class="btn btn-ghost btm-lg mt-4 ">View orders</a>
</div>
