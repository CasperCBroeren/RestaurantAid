<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let beverages = [];

	function selectBeverage(beverage) {
		dispatch('beverageSelected', beverage);
	}
</script>

<h3 class="col-span-2 xl:col-span-4 pt-10 pl-10">Welcome, first choose a refreshing drink</h3>

{#each beverages as beverage, i}
	<div class="card bg-base-300 m-10">
		<figure><img src={beverage.image} alt={beverage.name} /></figure>
		<div class="card-body">
			<h2 class="card-title">{beverage.name}</h2>
			<p>{beverage.description}</p>
			<div class="stat-title">Price {beverage.price.formated}</div>
			<div class="card-actions justify-end">
				<button class="btn btn-primary" on:click={() => selectBeverage(beverage)}>Select</button>
			</div>
		</div>
	</div>
{/each}
