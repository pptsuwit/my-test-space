<template>
  <Head>
    <Title>Next Page || {{ data?.message }}</Title>
    <Meta name="description" :content="data?.message" />
  </Head>
  <div>
    {{ data?.message }}
  </div>
</template>

<script setup lang="ts">
type AboutType = {
  message: string;
};

const { data, error } = await useFetch<AboutType>(
  `${useRuntimeConfig().public.apiBaseUrl}/abouts`
);

console.log(data);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Error fetching",
    fatal: true,
  });
}

// const { data } = await useFetch(apiUrl)
//   .then((response: any) => {
//     console.log(response);
//     return response;
//   });

// useHead({
//   title: "About",
//   meta: [
//     { name: "description", content: "About page" },
//     { name: "keywords", content: "About, index" },
//   ],
// });
</script>

<style></style>
