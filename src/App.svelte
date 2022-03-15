<script>
  import "./app.css";  
  import { beverages, meals } from "./assets/data";
  import Menu from "./lib/menu.svelte";
  import Progress from "./lib/progress.svelte";
  import ChooseBeverage from "./lib/chooseBeverage.svelte";
  import ChooseMeal from "./lib/chooseMeal.svelte";
import OrderOverview from "./lib/orderOverview.svelte";
  
  let currentStep = 1;
  let selectedBeverage, selectedMeal = null;

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
</script>

<main class="p-10 bg-base-100 h-screen w-screen">
   <Menu />
   <div class="flex flex-col xl:flex-row mt-5 ">
      <Progress bind:step={currentStep} />
      <div class="grid grid-cols-2 xl:grid-cols-4 xl:w-5/6 flex-grow mt-10 xl:mt-0 xl:ml-10 bg-base-100 rounded-lg shadow-xl  ">
        {#if currentStep === 1}
          <ChooseBeverage beverages={beverages} on:beverageSelected={setBeverage} />        
        {/if}
        {#if currentStep === 2 }
          <ChooseMeal meals={meals} beverage={selectedBeverage} on:mealSelected={setMeal} />
        {/if}
        {#if currentStep === 3 }
          <OrderOverview meal={selectedMeal} beverage={selectedBeverage} />
        {/if}
    </div>
  </div>
</main>

<style>
  main {
    background: gainsboro;
    background-image: radial-gradient(rgb(189, 189, 189) 1px, transparent 0);
    background-size: 10px 10px;
  }
</style>