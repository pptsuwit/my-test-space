<template>
  {{ route.params.id }}

  <AppAlert> This is an auto-imported component. asdasdasdasdad </AppAlert>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<style></style>
