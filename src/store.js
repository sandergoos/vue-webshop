import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mutations = {
  addToCart: (state, { id }) => {
    const record = state.cart.find(p => p.id === id);

    if (record) {
      record.quantity++;
    } else {
      state.cart.push({
        id,
        quantity: 1
      });
    }
  }
};

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "product 1",
        price: 100
      },
      {
        id: 2,
        name: "product 2",
        price: 90
      },
      {
        id: 3,
        name: "product 3",
        price: 120
      }
    ],
    cart: []
  },
  mutations
});
