<template>
  <div class="position-fixed top-0 start-0 end-0">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="/" class="navbar-brand">MovieDB</a>
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
import { debounce } from "debounce";

export default {
  name: "Header",
  data: () => {
    return {
      searchValue: "",
      isDebounceInitialized: false,
      debounceFn: null
    };
  },
  watch: {
    searchValue: "onSearchValueChange"
  },
  methods: {
    ...mapActions("movies", ["searchMovie", "fetchMovies", "toggleSearchState"]),

    onSearchValueChange(value) {
      if (!this.isDebounceInitialized) {
        this.debounceFn = debounce(this.search, 500);
        this.isDebounceInitialized = true;
      }
      this.debounceFn(value);
    },

    search(value) {
      if (value) {
        this.toggleSearchState(true);
        this.searchMovie(value);

        console.log("search 1");
      } else {
        //очищать от нотификаций
        this.toggleSearchState(false);
        this.fetchMovies();

        console.log("search 2");
      }
    }
  }
};
</script>

<style scoped>

</style>
