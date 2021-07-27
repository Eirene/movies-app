<template>
  <div class="mt-5">
    <div class="text-center mb-5">
      <h3>{{ listTitle }}</h3>
    </div>

    <div class="row">
      <template v-if="isExist">
        <div
          class="col-12 col-sm-6 col-md- col-lg-3 mb-3"
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
      <div class="modal-dialog modal-xl">
        <div class="modal-content text-dark">
          <div class="modal-header">
            <button @click="closeModal"
                    type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <MovieInfo :movie="selectedMovie" />
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
    openModal() {
      this.isShowInfoModal = true;
    },
    closeModal() {
      this.isShowInfoModal = false;
    }
  }
};
</script>
