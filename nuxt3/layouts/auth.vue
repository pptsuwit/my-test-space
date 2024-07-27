<template>
  <div>
    <header>
      <ul class="shadow flex gap-4 p-2 pl-12">
        <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
      </ul>
    </header>
  </div>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
