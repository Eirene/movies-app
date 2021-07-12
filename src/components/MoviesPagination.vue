<template>
  <div class="movies-pagination mt-5 d-flex justify-content-center">
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  components: {
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
    total: {
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
    }
  },
  methods: {
    myCallback() {
      console.log('myCallback from pagination');
    },
  },
  options: {
    chunk: 5,
  },
};
</script>

<style scoped>

</style>
