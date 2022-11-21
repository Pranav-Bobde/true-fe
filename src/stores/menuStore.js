import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menu: null,
    modal: {
      show: false,
      title: "",
      id: "",
    },
    order: null,
  }),
  actions: {
    addToCart(id) {
      let item = this.menu.find((item) => item.id === id);
      let orderItem = {
        id: item.id,
        name: item.name,
        price: item.price,
      };

      this.order = {
        id: uuidv4(),
        orders_list: [{ ...orderItem }],
      };
      console.log("Store: ", this.order);
    },
    closeModal() {
      this.modal.show = false;
    },
    openModal() {
      this.modal.show = true;
    },
    async fetchMenu() {
      const response = await fetch(process.env.MENU_GET_API, {
        method: "GET",
        headers: {
          "x-api-key": process.env.KEY,
        },
      });
      const data = await response.json();
      this.menu = data;
      console.log(this.menu);
    },
  },
});
