<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let meals = [];
	export let beverage = null;

	function selectMeal(meal) {
		dispatch('mealSelected', meal);
	}
</script>

<h3 class="col-span-2 xl:col-span-4 pt-10 pl-10">
	Now you got your {beverage.name} selected, please choose a meal you like.
</h3>

{#each meals as meal, i}
	<div class="card bg-base-300 m-10">
		<figure><img src={meal.image} alt={meal.name} /></figure>
		<div class="card-body">
			<h2 class="card-title">{meal.name}</h2>
			<p>{meal.description}</p>
			<div class="stat-title">Price {meal.price.formated}</div>
			<div class="card-actions justify-end">
				<button class="btn btn-primary" on:click={() => selectMeal(meal)}>Select</button>
			</div>
		</div>
	</div>
{/each}
