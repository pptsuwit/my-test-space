<template>
  <div
    class="border shadow-md hover:bg-slate-300"
    :class="{ 'bg-white': index % 2 === 0, 'bg-slate-200': index % 2 === 1 }"
  >
    <NuxtLink :to="`/todos/${todo.id}`">
      {{ `${todo.id}. ${todo.name}` }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { todo } = defineProps(["todo", "index"]);
</script>

<style></style>
