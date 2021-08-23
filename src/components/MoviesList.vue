<template>
  <div class="z-10">
    <div class="text-center mb-5">
      <h3 class="text-purple-50 text-2xl">{{ listTitle }}</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <template v-if="isExist">
        <div
          v-for="(movie, key) in list"
          :key="key"
        >
          <MovieItem
            :movie="movie"
            @onMouseOver="this.$emit('changePoster', $event)"
            @showModal="onShowMovieInfo"
          />
        </div>
      </template>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="isShowInfoModal">
    <div class="modal fade" :class="isModalShow" :id="movieInfoModalID" tabindex="-1">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
          shadow-xl transform transition-all md:max-w-5xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <button @click="closeModal" type="button" class="btn-close"></button>
              <div>
                <MovieInfo :movie="selectedMovie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieItem from "./MovieItem";
import MovieInfo from "./MovieInfo";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfo
  },
  emits: ["changePoster"],
  data: () => {
    return {
      movieInfoModalID: "staticBackdrop",
      selectedMovieID: "",
      isShowInfoModal: false
    };
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    isModalShow() {
      return this.isShowInfoModal ? "show d-block" : "";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    }
  },
  methods: {
    onShowMovieInfo(id) {
      this.selectedMovieID = id;
      this.isShowInfoModal = true;
    },
    closeModal() {
      this.isShowInfoModal = false;
    }
  }
};
</script>
