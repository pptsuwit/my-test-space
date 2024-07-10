<template>
  <div class="mt-7 max-w-sm mx-auto text-center">
    <p class="my-4 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="my-4 text-5xl">Ooops.</p>
    <p class="my-4 text-xl">{{ error.message }}</p>
    <button
      class="btn bg-blue-400 hover:bg-blue-600 border rounded-md shadow text-white font-bold p-2 my-4"
      @click="handleError"
    >
      Go to Home.
    </button>
  </div>
</template>

<script setup lang="ts">
const { error } = defineProps(["error"]);
console.log(error);
function handleError() {
  clearError({ redirect: "/" });
}
</script>

<style></style>
