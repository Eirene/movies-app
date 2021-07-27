<template>
  <div @mouseover="$emit('onMouseOver', movie.Poster)">
    <div>{{ movie.Title }}</div>
    <div>{{ movie.Year }}</div>
    <div><img :src="posterBg" alt="{{ movie.Title }}" /></div>
    <div>
      <button class="btn btn-info text-white"
              @click="$emit('showModal', movie.imdbID)">Info</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  emits: ["onMouseOver", "showModal"],
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
  methods: {
  },
};
</script>
