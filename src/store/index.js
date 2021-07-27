import { createStore } from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import notification from "./modules/notification";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notification,
  },
});

export default store;
