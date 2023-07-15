<template>
<div>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
<ProductCard :product="p" />
    </div>
  </div>
</div>



</template>
<script setup >
import ProductCard from "~/components/ProductCard.vue";
//fetch the data
const {data : products}  = await useFetch('https://fakestoreapi.com/products')
useHead({
  title:'Product Home Page',
  meta:[
    {name: 'description', content: 'Everything about product '}
  ]
})

definePageMeta({ layout:'products' })

</script>