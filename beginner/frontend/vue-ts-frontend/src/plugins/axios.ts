import axios from "axios";
if (typeof window !== "undefined") {
  axios.defaults.headers.common["accept"] = "application/json";
  axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(import.meta.env.VITE_TOKEN_NAME as string) || ""}`;
} else {
  // 👉️ can't use localStorage
}
const httpService = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_URL_VERSION}`,
  headers: {
    accept: "application/json",
  },
});
httpService.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  (error: any) => {
    console.log(error);
    if (error.code === "ERR_NETWORK") return Promise.reject(error);
    const { response } = error;
    const errors = response?.data?.error;
    if (axios.isAxiosError(error)) if (response?.status === 401) window.location.href = import.meta.env.VITE_REDIRECT_TO_LOGIN as string;
    return Promise.reject(errors);
  }
);

export default httpService;
