<script>
	import '../assets/app.css';
	import { beverages, meals } from '../stores/item.store';
	import Progress from '../lib/progress.svelte';
	import ChooseBeverage from '../lib/chooseBeverage.svelte';
	import ChooseMeal from '../lib/chooseMeal.svelte';
	import OrderOverview from '../lib/orderOverview.svelte';
	import Finished from '../lib/finished.svelte';
	import { fade } from 'svelte/transition';
	import { orderStore } from '../stores/order.store';
	import { Order } from '../models/order';

	let currentStep = 1;
	let selectedBeverage,
		selectedMeal = null;
	const stepTransition = { duration: 800 };

	function setBeverage(event) {
		currentStep = 2;
		selectedBeverage = event.detail;
	}

	function setMeal(event) {
		currentStep = 3;
		selectedMeal = event.detail;
	}

	function finalizeOrder() {
		currentStep = 4;
		orderStore.addOrder(new Order(selectedBeverage, selectedMeal));
	}

	function reset() {
		currentStep = 1;
		selectedBeverage = null;
		selectedMeal = null;
	}
</script>

<div class="flex flex-col xl:flex-row mt-5 ">
	<Progress bind:step={currentStep} />

	{#if currentStep === 1}
		<div class="stepbox stepbox-grid" in:fade={stepTransition}>
			<ChooseBeverage beverages={$beverages} on:beverageSelected={setBeverage} />
		</div>
	{/if}
	{#if currentStep === 2}
		<div class="stepbox stepbox-grid" in:fade={stepTransition}>
			<ChooseMeal meals={$meals} beverage={selectedBeverage} on:mealSelected={setMeal} />
		</div>
	{/if}
	{#if currentStep === 3}
		<div class="stepbox" in:fade={stepTransition}>
			<OrderOverview
				meal={selectedMeal}
				beverage={selectedBeverage}
				on:orderFinal={finalizeOrder}
			/>
		</div>
	{/if}
	{#if currentStep === 4}
		<div class="stepbox" in:fade={stepTransition}>
			<Finished on:reset={reset} />
		</div>
	{/if}
</div>
