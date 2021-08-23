<template>
  <div class="movie-info-wrap">
    <div class="movie-info-content">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </div>
        <div class="md:col-span-2">
          <h3 class="text-5xl tracking-wide mb-6">{{ movie.Title }}</h3>

          <p class="movie-description">{{ movie.Plot }}</p>
          <div class="my-4">
            <div class="movie-badge">{{ movie.Year }}</div>
            <div class="movie-badge">{{ movie.Runtime }}</div>
            <div class="movie-badge">{{ movie.Genre }}</div>
            <div class="movie-badge">{{ movie.Language }}</div>
          </div>
          <table class="movie-info-table">
            <tbody>
            <tr>
              <th>Production</th>
              <td>{{ movie.Production }}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{{ movie.Country }}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{{ movie.Director }}</td>
            </tr>
            <tr>
              <th>Writer</th>
              <td>{{ movie.Writer }}</td>
            </tr>
            <tr>
              <th>Actors</th>
              <td>{{ movie.Actors }}</td>
            </tr>
            <tr>
              <th>Awards</th>
              <td>{{ movie.Awards }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfo",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)",
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.movie-info-content {
  padding: 1rem;
  background-color: #fff;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.b-rating-star ::v-deep(.movie-rating),
.b-rating-value ::v-deep(.movie-rating) {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}

.b-rating-star + .b-rating-star ::v-deep(.movie-rating) {
  margin-left: 4px;
}

.b-rating-value ::v-deep(.movie-rating) {
  margin-left: 10px;
}

.movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
