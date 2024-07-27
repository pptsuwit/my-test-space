<template>
  <div>Product index</div>
</template>

<script setup>
const route = useRoute();
console.log(route.query["test"]);

useHead({
  title: "Product Index",
  meta: [
    { name: "description", content: "Product index page" },
    { name: "keywords", content: "product, index" },
  ],
});
</script>

<style scoped></style>
