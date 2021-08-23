<template>
  <nav class="fixed inset-x-0 top-0 w-full bg-purple-400
              bg-gradient-to-r from-purple-700 via-purple-800
              text-purple-50 dark:bg-gray-900 shadow py-2">
    <div class="container max-w-screen-lg mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a class="flex items-center text-xl text-purple-50" href="/">
            <img width="24" class="inline-block mr-3" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="">
            <span class="hidden sm:inline">MovieDB</span>
          </a>
        </div>
        <div class="w-full sm:w-6/12">
          <form class="flex">
            <input type="search" v-model="searchValue" placeholder="Search"
                   class="flex-shrink-0 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <button class="flex-shrink-0 ml-4 px-4 py-2 text-base font-semibold text-white bg-purple-800 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
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
