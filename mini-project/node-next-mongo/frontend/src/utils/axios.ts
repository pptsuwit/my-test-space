import axios from "axios";
if (typeof window !== "undefined") {
  axios.defaults.headers.common["accept"] = "application/json";
  axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(process.env.TOKEN_NAME as string) || ""}`;
} else {
  // 👉️ can't use localStorage
}
const httpService = axios.create({
  baseURL: `${process.env.API_URL}${process.env.API_URL_VERSION}`,
  headers: {
    accept: "application/json",
  },
});
httpService.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (error.code === "ERR_NETWORK") return Promise.reject(error);
    const { response } = error;
    const errorMessage = response?.data?.message || error.message;
    if (axios.isAxiosError(error)) if (response?.status === 401) window.location.href = process.env.REDIRECT_TO_LOGIN as string;
    return Promise.reject(errorMessage);
  }
);

export default httpService;
