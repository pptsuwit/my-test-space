<template>
  <slot />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
const store = useStore();
onMounted(() => {
  if (store.getToken) useRouter().push("/");
});
</script>
