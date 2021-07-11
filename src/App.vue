<template>
  <div class="container">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList";
import PosterBg from "./components/PosterBg";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
  },
  data: () => {
    return {
      posterBg: "",
    }
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles.scss";

#app {
  position: relative;
  color: white;
}
</style>
