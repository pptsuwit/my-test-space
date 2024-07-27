<template>
  <div class="card mt-6 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oops!!</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-7" @click="handleClearError">Back to home</button>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped></style>
