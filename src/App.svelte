<script>
  import "./app.css";  
  import { beverages, meals } from "./assets/data";
  import Menu from "./lib/menu.svelte";
  import Progress from "./lib/progress.svelte";
  import ChooseBeverage from "./lib/chooseBeverage.svelte";
  import ChooseMeal from "./lib/chooseMeal.svelte";
  import OrderOverview from "./lib/orderOverview.svelte";
  import Finished from "./lib/finished.svelte";
  import { fade } from "svelte/transition";
  
  let currentStep = 1;
  let selectedBeverage, selectedMeal = null;
  let orders = [];
  const stepTransition = { duration: 800};

  function setBeverage(event)
  {
      currentStep = 2;
      selectedBeverage = event.detail;
  }

  function setMeal(event)
  {
      currentStep = 3;
      selectedMeal = event.detail;
  }

  function finalizeOrder()
  {
      currentStep = 4;
      orders.push({ beverage: selectedBeverage, meal: selectedMeal, orderedAt: new Date()});
  }
</script>

<main class="p-10 bg-base-100 h-screen w-screen">
   <Menu />
   <div class="flex flex-col xl:flex-row mt-5 ">
      <Progress bind:step={currentStep} />
      
        {#if currentStep === 1}
          <div class="stepbox stepbox-grid" in:fade={stepTransition} >
            <ChooseBeverage beverages={beverages} on:beverageSelected={setBeverage} />        
          </div>
        {/if}
        {#if currentStep === 2 }
          <div class="stepbox stepbox-grid" in:fade={stepTransition} >
            <ChooseMeal meals={meals} beverage={selectedBeverage} on:mealSelected={setMeal} />
          </div>
        {/if}
        {#if currentStep === 3 }
          <div class="stepbox" in:fade={stepTransition} >
            <OrderOverview meal={selectedMeal} beverage={selectedBeverage} on:orderFinal={finalizeOrder} />
          </div>
        {/if}
        {#if currentStep === 4 }
          <div class="stepbox" in:fade={stepTransition} >
            <Finished  />
          </div>
        {/if}    
  </div>
</main>

<style>
  main {
    background: gainsboro;
    background-image: radial-gradient(rgb(189, 189, 189) 1px, transparent 0);
    background-size: 10px 10px;
  }
</style>