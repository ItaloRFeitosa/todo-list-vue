import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "a5v836w5gf45n5a",
        title: "Aprender VueJS",
        description:
          "Aprender os principais conceitos de vue, vuex e vue-router até segunda",
        date: new Date(),
        done: false
      }
    ]
  },

  mutations: {},
  actions: {},
  modules: {}
});
