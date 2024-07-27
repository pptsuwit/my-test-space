<template>
  <div>
    <header>
      <ul class="shadow flex gap-4 p-2 pl-12">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/auth">Login</NuxtLink></li>
        <li><NuxtLink to="/ninja">Ninja api</NuxtLink></li>
        <li><NuxtLink to="/throw-error">Throw Error</NuxtLink></li>
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
