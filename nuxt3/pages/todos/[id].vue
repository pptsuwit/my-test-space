<template>
  <div class="">
    <p>{{ id }}</p>
    <p>{{ todo.name }}</p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const uri = `https://65f3ded1105614e654a15081.mockapi.io/api/v1/todo/${id}`;
const { data: todo }: any = await useFetch(uri);
if (!todo.value) {
  throw createError({ statusCode: 500, message: "Can't find this todo" });
}
</script>

<style></style>
