<template>
  <div class="container">
    <h2 class="film">Film</h2>
    <ul v-for="movie in store.searchMovieResults">
      <MovieCard
        :title="movie.title || movie.name"
        :originalTitle="movie.original_title || movie.original_name"
        :language="movie.original_language"
        :overview="movie.overview"
        :review="movie.vote_average"
      />
    </ul>
    <h2 class="tv">Serie TV</h2>
    <ul v-for="series in store.searchTVResults">
      <MovieCard
        :title="series.name"
        :originalTitle="series.original_name"
        :language="series.original_language"
        :overview="series.overview"
        :review="series.vote_average"
      />
    </ul>
  </div>
</template>

<script>
import { store } from "../store";
import MovieCard from "./MovieCard.vue";
export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
