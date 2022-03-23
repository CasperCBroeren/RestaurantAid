<script>
	export let step;

	function revisit(aStep) {
		if (aStep < step) {
			step = aStep;
		}
	}
</script>

<div class="flex card xl:w-1/6 bg-base-100 shadow-xl ">
	<div class="card-body">
		<h2 class="card-title">Progress</h2>

		<ul class="steps xl:steps-vertical">
			<li class="step" class:step-primary={step > 0} on:click={() => revisit(1)}>
				Choose beverage
			</li>
			<li class="step" class:step-primary={step > 1} on:click={() => revisit(2)}>Choose meal</li>
			<li class="step" class:step-primary={step > 2} on:click={() => revisit(3)}>Purchase</li>
			<li class="step" class:step-primary={step > 3} on:click={() => revisit(4)}>
				Receive Product
			</li>
		</ul>
	</div>
</div>
