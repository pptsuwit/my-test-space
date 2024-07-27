<template>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni accusamus
    ipsum quo velit ratione suscipit repellendus magnam sunt saepe? Odio magni
    totam laboriosam ullam exercitationem neque, temporibus placeat similique
    nam.
    <p class="text-red-500 text-3xl">{{ data?.message }}</p>
  </div>
</template>

<script setup lang="ts">
const name = "Lorem ipsum dolor sit, amet consect";
// const { data } = await useFetch(`/api/ninja?name=${name}`, {
//   method: "POST",
//   body: {
//     age: 30,
//   },
// });
type AboutType = {
  message: string;
};
const { data, error } = await useFetch<AboutType>(`/api/ninja`);
console.log(data, error);
</script>

<style scoped></style>
