import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "product 1",
        price: 100
      },
      {
        name: "product 2",
        price: 90
      }
    ]
  },
  mutations: {},
  actions: {}
});
