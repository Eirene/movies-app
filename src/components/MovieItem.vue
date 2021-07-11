<template>
  <div @mouseover="$emit('onMouseOver', movie.Poster)">
    <div>{{ movie.Title }}</div>
    <div>{{ movie.Year }}</div>
    <div><img :src="posterBg" alt="{{ movie.Title }}" /></div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  emits: ["onMouseOver"],
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      return `${this.movie.Poster}`;
    },
  },
};
</script>
