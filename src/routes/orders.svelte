<script>
	import { orderStore } from '../stores/order.store';
	import moment from 'moment';
	import Price from '../lib/Price.svelte';
</script>

<div class="mt-5 p-10 bg-base-100 rounded-lg shadow-xl ">
	<h2 class="text-3xl font-bold">Orders</h2>
	<p class="">These are your past orders in descending order</p>
	<div class="overflow-x-auto">
		<table class="table w-full mt-5">
			<thead>
				<tr>
					<th>Beverage</th>
					<th>Meal</th>
					<th>Date</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{#each $orderStore as order}
					<tr>
						<th>{order.beverage.name}</th>
						<td>{order.meal.name}</td>
						<td>{moment(order.orderedAt).format('MMMM Do YYYY, HH:mm')}</td>
						<td><Price value={order.beverage.price + order.meal.price} /></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
