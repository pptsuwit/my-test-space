export default defineEventHandler(async (event: any) => {
  // //handle query parameters
  // const { name } = getQuery(event);

  // //handle post data
  // const { age } = await readBody(event);

  //api call
  const data = await $fetch("http://localhost:8000/api/abouts");
  // return {
  //   message: `Hello, ${name}! Your are ${age} years old`,
  // };
  return data;
});
