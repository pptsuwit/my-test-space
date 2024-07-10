export default function ({ $axios }: any, inject: any) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  // Set baseURL to something different
  api.setBaseURL("https://65f3ded1105614e654a15081.mockapi.io/api/v1/");

  // Inject to context as $api
  inject("api", api);
}
