<template>
  <div class="container py-5">
    <Loader />
    <Notification />
    <PosterBg :poster="posterBg" />
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :pages="Math.ceil(moviesLength / moviesPerPage)"
      @pageChanged="onPageChanged" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Notification from "./components/Notification";

export default {
  name: "App",
  components: {
    Loader,
    MoviesList,
    PosterBg,
    MoviesPagination,
    Header,
    Notification,
  },
  data: () => {
    return {
      posterBg: "",
    }
  },
  computed: {
    ...mapGetters("movies", ["moviesList", "currentPage", "moviesPerPage", "moviesLength"]),
  },
  watch: {
    '$route.query': {
      handler: "onPageQueryChange",
      immediate: false,
      deep: true,
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageQueryChange({ page = 1 }){
      this.changeCurrentPage(Number(page));
    },
    onPageChanged(page){
      this.$router.push({ query: { page } });
    }
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles.scss";

#app {
  position: relative;
  color: white;

  img{
    max-width: 100%;
  }
}

.container{
  max-width: 960px;
}
</style>
