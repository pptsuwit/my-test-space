<template>
  <div v-for="(item, index) in todos">
    <Card :todo="item" :index="index" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { data: todos } = await useFetch(
  "https://65f3ded1105614e654a15081.mockapi.io/api/v1/todo"
);
</script>

<style></style>
