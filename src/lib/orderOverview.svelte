<script>
     import {createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let meal = null;
    export let beverage = null;

    function order()
    {
        dispatch('orderFinal');
    }

</script>
<div class="note lg:w-1/3">
  
    <div>
      <div class="stat-title">Beverage</div>
      <div class="text-2xl font-bold ">{beverage.name}</div>
      <div class="stat-desc">Price &euro; {beverage.price}</div>
    </div>
    <div class="divider">and</div>
    <div>
      <div class="stat-title">Meal</div>
      <div class="text-2xl font-bold">{meal.name}</div>
      <div class="stat-desc">Price &euro; {meal.price}</div>
    </div>
    
  </div>

  <div class="w-2/3 pt-32 lg:p-32">
    <h3 class="text-4xl mb-4">Almost there!</h3>
    <p class="">
      Your meal order is almost complete. Please review the order and press purchase
    </p>
      <div class="text-xl mt-4">
        Total: 
        &euro; {meal.price + beverage.price}
      
      <button on:click={order} class="btn btn-primary btm-lg mt-4 lg:ml-4">Purchase</button>
      </div>
  </div>