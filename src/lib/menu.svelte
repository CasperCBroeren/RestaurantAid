<script>
  export let items = [{ name: 'create', route: '/'}, { name: 'orders', route: '/orders'}];
  </script>
  
  <div class="navbar bg-base-100 rounded">
    <div class="flex-1">
      
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_cbr1qxxq.json"  
            background="transparent"  
            speed="1"  
            class="w-16"            
            autoplay>
        </lottie-player>
      <h1 class="normal-case text-xl">Restaurant aid 2.01</h1>
    </div>
    <ul class="flex-none">
      <ul class="menu menu-horizontal p-0">
        {#each items as item, i}
          <li>
            <a class="uppercase" href={item.route}>{item.name}</a>
          </li>
        {/each}
    </ul>
  </div>
 