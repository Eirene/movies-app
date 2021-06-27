import axios from "../../plugin/axios";

const moviesStore = {
  state: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      const response = await axios.get("/", {
        params: {
          i: "tt3896198",
          apikey: process.env.VUE_APP_API_KEY,
          plot: "full",
        },
      });
      console.log(response);
    },
  },
  modules: {},
  namespaced: true,
};

export default moviesStore;
