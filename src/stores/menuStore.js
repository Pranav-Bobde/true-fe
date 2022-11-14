import { defineStore } from 'pinia';

const get_uid = () => {
  let length = 32;
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
};

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: null,
    // [
    // {
    //   id: "6ba85ad04fb740a2a68g670507abe2b3", // 6ba85ad04fb740a2a6c8670507abe2b3
    //   created_at: 1667800773,
    //   description: "It is a dark strong cold coffee",
    //   image: "https://femina.wwmindia.com/content/2022/mar/i1coffeedrinksforspring-caramelsurprisecoldbrew1648470191.jpg",
    //   ingredients: [
    //     0,
    //     0
    //   ],
    //   is_customized: false,
    //   is_deleted: false,
    //   name: "Black Cold Coffee",
    //   price: 0,
    //   updated_at: 1667800773
    // },
    // {
    //   id: "6ba85ad04fb740a2a68g670507abe2b3", // 6ba85ad04fb740a2a6c8670507abe2b3
    //   created_at: 1667800773,
    //   description: "It is a milk based cold coffee",
    //   image: "https://femina.wwmindia.com/content/2022/mar/i1coffeedrinksforspring-caramelsurprisecoldbrew1648470191.jpg",
    //   ingredients: [
    //     0,
    //     0
    //   ],
    //   is_customized: false,
    //   is_deleted: false,
    //   name: "White Cold Coffee",
    //   price: 0,
    //   updated_at: 1667800773
    // }
    // ],
    modal: {
      show: false,
      title: '',
    },
    order: null
    // {
    //   id: get_uid(),
    //   item_id:'',
    //   name: '',
    //   price: '',

    // }
  }),
  getters: {
    addToCart: (state) => {
      return (id) => {
        let item = state.menu.find((item) => item.id === id);
        let orderItem = {
          item_id: item.id,
          name: item.name,
          price: item.price,
        };
        state.order = { ...orderItem, id: get_uid() };
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
      console.log(this.menu);
    },
    async postOrder() {
      const response = await fetch(process.env.APIPOST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.KEY
        },
        body: JSON.stringify({ a: 1, b: 'Textual content' })
      });
      const data = await response.json();
      console.log(data);
    }
  }
});
