<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <NuxtLink to="/" >Nuxt DOjo Merch</NuxtLink>
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot/>
  </div>
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/" >Home</NuxtLink></li>
      <li><NuxtLink to="/about" >About</NuxtLink></li>
      <li><NuxtLink to="/products" >Products</NuxtLink></li>
      <li><NuxtLink to="/products/sdfds" >Products</NuxtLink></li>

    </ul>
  </footer>

</template>

<style scoped>
.router-link-exact-active{
  color: green;
}
</style>
<script setup lang="ts">
</script>