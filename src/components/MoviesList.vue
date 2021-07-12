<template>
  <div>
    <div class="text-center mb-5">
      <h3>IMDB Top 250</h3>
    </div>

    <div class="row">
      <template v-if="isExist">
        <div
          class="col-12 col-sm-6 col-md- col-lg-3 mb-3"
          v-for="(movie, key) in list"
          :key="key"
        >
          <MovieItem
            :movie="movie" @onMouseOver="this.$emit('changePoster', $event)" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
  },
};
</script>
