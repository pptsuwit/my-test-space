<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
store.$patch({
  title: "Dashboard",
});
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-700">Welcome to My App!</h1>
    </div>
  </div>
</template>

<style lang=""></style>
