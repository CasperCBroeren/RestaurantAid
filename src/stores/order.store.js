import { writable } from 'svelte/store';

function createOrders() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		addOrder: (order) =>
			update((o) => {
				o.push(order);
				o.sort((a, b) => (a.orderedAt < b.orderedAt ? 1 : -1));
				return o;
			}),
		reset: () => set([])
	};
}

export const orderStore = createOrders();
