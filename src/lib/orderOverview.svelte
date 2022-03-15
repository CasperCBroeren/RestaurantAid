<script>
    export let meal = null;
    export let beverage = null;

</script>
<div class="stats stats-vertical shadow">
  
    <div class="stat">
      <div class="stat-title">Beverage</div>
      <div class="stat-value">{beverage.name}</div>
    </div>
    
    <div class="stat">
      <div class="stat-title">Meal</div>
      <div class="stat-value">{meal.name}</div>
    </div>
    
  </div>