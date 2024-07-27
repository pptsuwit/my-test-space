export default defineEventHandler(async (event: any) => {
  const { code } = event.context.params;

  const { apiSecret } = useRuntimeConfig();
  const uri = `${apiSecret}/${code}`;

  const data = await $fetch(uri);
  return data;
});
