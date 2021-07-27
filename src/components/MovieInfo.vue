<template>
  <div class="movie-info-wrap">
    <div class="movie-info-content">
      <div class="row">
        <div class="col-sm-4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </div>
        <div class="col-sm-8">
          <h3 class="movie-title">{{ movie.Title }}</h3>

          <p class="movie-description">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <div class="badge bg-success me-2">{{ movie.Year }}</div>
            <div class="badge bg-success me-2">{{ movie.Runtime }}</div>
            <div class="badge bg-success me-2">{{ movie.Genre }}</div>
            <div class="badge bg-success me-2">{{ movie.Language }}</div>
          </div>
          <table class="table small">
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

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
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
