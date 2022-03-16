<script>
    import "../assets/app.css";    
    import Menu from "../lib/menu.svelte"; 
   
  </script>
  
  <main class="p-10 bg-base-100 h-screen w-screen">
     <Menu />
     <slot></slot>
  </main>
  
  <style>
    main {
      background: gainsboro;
      background-image: radial-gradient(rgb(189, 189, 189) 1px, transparent 0);
      background-size: 10px 10px;
    }
  </style>