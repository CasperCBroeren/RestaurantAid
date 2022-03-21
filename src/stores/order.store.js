import { writable } from "svelte/store";

function createOrders()
{
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addOrder: (order) => update(o => {
            o.push(order);
            return o;
        }),        
        reset: () => set([])
    }
}

export const orderStore = createOrders();