<template>
  <div class="position-fixed top-0 start-0 end-0">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand">MovieDB</a>
        <form class="d-flex w-50">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            v-model="searchValue">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => {
    return {
      searchValue: "",
    }
  },
  watch: {
    searchValue: "onSearchValueChange",
  },
  methods: {
    ...mapActions("movies", ["searchMovie", "fetchMovies", "toggleSearchState"]),
    onSearchValueChange(value) {
      if (value) {
        this.toggleSearchState(true);
        this.searchMovie(value);
      } else {
        this.toggleSearchState(false);
        this.fetchMovies();
      }
    },
  },
};
</script>

<style scoped>

</style>
