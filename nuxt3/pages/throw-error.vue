<template>
  <NuxtLink to="/error">Error Page</NuxtLink>
</template>

<script setup lang="ts">
throw createError({
  statusCode: 404,
  statusMessage: "Throw Error Test",
  fatal: true,
});
</script>

<style scoped></style>
