import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [
      {
        id: "6ba85ad04fb740a2a68g670507abe2b3", // 6ba85ad04fb740a2a6c8670507abe2b3
        created_at: 1667800773,
        description: "It is a dark strong cold coffee",
        image: "https://femina.wwmindia.com/content/2022/mar/i1coffeedrinksforspring-caramelsurprisecoldbrew1648470191.jpg",
        ingredients: [
          0,
          0
        ],
        is_customized: false,
        is_deleted: false,
        name: "Black Cold Coffee",
        price: 0,
        updated_at: 1667800773
      },
      {
        id: "6ba85ad04fb740a2a68g670507abe2b3", // 6ba85ad04fb740a2a6c8670507abe2b3
        created_at: 1667800773,
        description: "It is a milk based cold coffee",
        image: "https://femina.wwmindia.com/content/2022/mar/i1coffeedrinksforspring-caramelsurprisecoldbrew1648470191.jpg",
        ingredients: [
          0,
          0
        ],
        is_customized: false,
        is_deleted: false,
        name: "White Cold Coffee",
        price: 0,
        updated_at: 1667800773
      }
    ],
    modal: {
      show: false,
      title: '',
    }
  }),
  getters: {
    confirmOrder: (state) => {
      (id) => {
        let chosenItem = state.menu.find((item) => item.id === id);
        state.modal.title = chosenItem.name;
        state.modal.show = true;
      }
    }
  },
  actions: {
    closeModal() {
      this.modal.show = false;
    },
    openModal() {
      this.modal.show = true;
    },
    async fetchMenu() {
      const response = await fetch(process.env.API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.KEY
        }
      });
      const data = await response.json();
      this.menu = data;
    },
    async postOrder() {
      const response = await fetch(process.env.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.KEY
        }
      });
      const data = await response.json();
      console.log(data);
    }
  }
});
