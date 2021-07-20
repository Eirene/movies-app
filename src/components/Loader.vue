<template>
  <div v-if="isShowLoader"
    class="position-fixed top-0 start-0 end-0 bottom-0 bg-light" style="opacity: 0.7">
    <div class="d-flex h-100 justify-content-center align-items-center">
      <div class="spinner-grow text-warning" role="status"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  }
};
</script>

<style scoped>

</style>
