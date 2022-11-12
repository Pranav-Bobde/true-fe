import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    open: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleModal() {
      console.log('toggleModal');
      this.open = !this.open;
    },
  },
});
