import { defineStore } from "pinia";
interface IStore {
  title: string;
  loading: boolean;
  token: string | undefined;
  dialog: boolean;
  dialogType: "create" | "update" | "error" | unknown;
  dialogMsg: string;
}
export const useStore = defineStore("store", {
  state: () => {
    return {
      title: "",
      loading: false,
      token: localStorage.getItem("token") || undefined,
      dialog: false,
      dialogType: "error",
      dialogMsg: "",
    };
  },
  getters: {
    getTitle: (state: IStore) => state.title,
    getToken: (state: IStore) => state.token || localStorage.getItem(`${import.meta.env.VITE_TOKEN_NAME}`),
  },
  // mutations: {
  //   setHeader(state: IStore, title: string) {
  //     state.title = title;
  //   },
  //   // dialog(state, { message, type }) {
  //   //   state.dialog = { message, type, state: true };
  //   // },
  // },
  // actions: {},
});
