<template>
  <Head>
    <Title>Product | {{product.title}}</Title>
  </Head>
  <div>
<ProductDetails :product="product" />

  </div>
</template>

<script setup>

import ProductDetails from "~/components/ProductDetails.vue";
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
// //  fetch the products
const { data: product } = await useFetch(uri, { key: id })
if(!product.value){
  throw createError({statusCode:404,statusMessage:'Product not found',fatal:true})
}
definePageMeta({
  layout: "products",
})
</script>