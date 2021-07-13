<template>
  <div class="movies-pagination mt-5 d-flex justify-content-center">
    <v-pagination
      v-model="currentPageModel"
      :pages="pages"
      :range-size="1"
      active-color="transparent"
    />
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: "MoviesPagination",
  components: {
    VPagination,
  },
  data: () => {
    return {
      page: 1,
    }
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 1
    },
    moviesLength: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("pageChanged", value);
      }
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.movies-pagination ::v-deep(.Page) {
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: white;
}
</style>
