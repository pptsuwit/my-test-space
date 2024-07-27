<template>
  <Head>
    <Title>Fetch Server || {{ data?.message }}</Title>
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

const { data, error } = await useFetch<AboutType>(`/api/currency/abouts`);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Error fetching",
    fatal: true,
  });
}
</script>

<style></style>
