import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      id: "",
      name: "",
      phno: [],
    },
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser({ id, name, phno }) {
      this.user.id = id;
      this.user.name = name;
      this.user.phno = phno;
    },
  },
});
