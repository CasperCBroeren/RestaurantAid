<script>
  export let items = ['create', 'orders'];
  </script>
  
  <div class="navbar bg-base-100 rounded">
    <div class="flex-1">
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_cbr1qxxq.json"  
            background="transparent"  
            speed="1"  
            class="w-16"            
            autoplay>
        </lottie-player>
      <a href="#" class="btn btn-ghost normal-case text-xl">Restaurant aid 2.01</a>
    </div>
    <ul class="flex-none">
      <ul class="menu menu-horizontal p-0">
        {#each items as item, i}
          <li>
            <a class="uppercase" href="">{item}</a>
          </li>
        {/each}
    </ul>
  </div>
 