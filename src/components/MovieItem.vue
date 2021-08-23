<template>
  <div @mouseover="$emit('onMouseOver', movie.Poster)"
       class="bg-white bg-opacity-80 rounded-lg h-full">
    <div class="cursor-pointer" @click="$emit('showModal', movie.imdbID)">
      <img class="h-80 rounded w-full object-cover object-center"
           :src="posterBg" alt="{{ movie.Title }}">
    </div>
    <div class="h-36 px-6 py-4">
      <div class="flex flex-col h-full">
        <h3 class="tracking-widest text-purple-500 text-xs font-medium title-font mb-2">{{ movie.Year }}</h3>
        <h2 class="max-h-14 overflow-hidden text-lg text-gray-900 font-medium title-font">{{ movie.Title }}</h2>
        <a href="#" class="text-sm text-purple-600 inline-flex items-center mt-auto"
           @click="$emit('showModal', movie.imdbID)">
          More Info
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
               fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
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
