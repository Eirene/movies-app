import { createStore } from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
  },
});

store.dispatch("initMoviesStore");

export default store;
