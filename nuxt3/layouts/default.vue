<template>
  <header>
    <!-- <div class="flex gap-4 p-2">
      <div class="text-blue-400 hover:text-blue-600 active:text-purple-500">
        <NuxtLink to="/about">About</NuxtLink>
      </div> 
      <div class="text-blue-400 hover:text-blue-600 active:text-purple-500">
        <NuxtLink to="/todos">Todos</NuxtLink>
      </div>
    </div> -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
      >
        <li>
          <NuxtLink
            to="/"
            :class="{ '!text-blue-700': route.name === 'index' }"
            class="block py-2 px-3 text-gray-900 hover:text-blue-700"
            aria-current="page"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            :class="{ '!text-blue-700': route.name === 'about' }"
            class="block py-2 px-3 text-gray-900 hover:text-blue-700"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/todos"
            :class="{ '!text-blue-700': route.path.includes('/todos') }"
            class="block py-2 px-3 text-gray-900 hover:text-blue-700"
            >Todos</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
  <slot />
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route);
</script>

<style></style>
