import { browser } from '$app/env';
import { writable } from 'svelte/store';

function createOrders() {
	const defaultValue = [];
	const initialValue = browser ? JSON.parse(window.localStorage.getItem('orders')) ?? defaultValue : defaultValue;
	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		addOrder: (order) =>
			update((o) => {
				o.push(order);
				o.sort((a, b) => (a.orderedAt < b.orderedAt ? 1 : -1));

				if (browser)
				{
					window.localStorage.setItem("orders", JSON.stringify(o));
				}
				return o;
			}),
		reset: () => set([])
	};
}

export const orderStore = createOrders();
