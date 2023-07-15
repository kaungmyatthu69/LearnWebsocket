<template>

    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut non perspiciatis repellat sequi suscipit. Autem commodi cum dolor hic inventore laborum nihil nobis omnis quam voluptas? Deserunt eaque ex ipsa.</p>
<div>{{data}}</div>

</template>
<script setup lang="ts">
const {data} = await useFetch('/api/currency/GBP')
//     ?name=kaung',{
// method:'post',
//     body:{age:30}
//
// }
</script>