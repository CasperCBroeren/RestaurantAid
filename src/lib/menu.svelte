<script>
	import { orderStore } from '../stores/order.store';
	import { page } from '$app/stores';
	export let items = [
		{ name: 'create', route: '/' },
		{ name: 'orders', route: '/orders' },
		{ name: 'about', route: '/about' }
	];
</script>

<div class="navbar bg-base-100 rounded">
	<div class="flex-1">
		<lottie-player
			src="https://assets5.lottiefiles.com/packages/lf20_cbr1qxxq.json"
			background="transparent"
			speed="1"
			class="w-16"
			autoplay
		/>
		<h1 class="normal-case text-xl">Restaurant aid 2.01</h1>
	</div>
	<ul class="flex-none">
		<ul class="menu menu-horizontal p-0">
			{#each items as item, i}
				<li>
					<a class="uppercase" class:active={$page.url.pathname === item.route} href={item.route}
						>{item.name}
						{#if item.name == 'orders'}
							<div class="badge">{$orderStore.length}</div>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</ul>
</div>
