<template>
  <div v-if="isShowNotification"
       class="fixed inset-x-0 flex items-end justify-center">
    <div class="notification text-center">
      <div class="alert alert-dismissible fade show w-100 relative"
           :class="variantNt"
           role="alert">
        {{ titleNt }}: {{ msgNt }}
        <button @click="closeNotification"
                type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  data: () => {
    return {
      isShowNotification: false,
      variant: "info",
      msg: "Something went wrong :(",
      title: "Error",
    }
  },
  computed: {
    ...mapGetters(["messagePool"]),
    variantNt() {
      return `alert-${this.variant}`;
    },
    msgNt() {
      return this.msg;
    },
    titleNt() {
      return this.title;
    },
  },
  watch: {
    messagePool: "showNotification"
  },
  methods: {
    closeNotification() {
      this.isShowNotification = false;
    },
    showNotification({ variant, msg, title }) {
      this.isShowNotification = true;
      this.variant = variant;
      this.msg = msg;
      this.title = title;
    }
  }
};
</script>
