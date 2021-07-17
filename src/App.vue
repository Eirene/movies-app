<template>
  <div class="container py-5">
    <PosterBg :poster="posterBg" />
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

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
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
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageQueryChange({ page = 1 } ){
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
</style>
