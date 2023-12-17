<template>
  <div class="main-body">
    <h2 v-if="store.searchMovieResults.length !== 0" class="film">Film</h2>
    <div class="container">
      <ul v-for="movie in store.searchMovieResults">
        <MovieCard
          :title="movie.title || movie.name"
          :originalTitle="movie.original_title || movie.original_name"
          :poster="'https://image.tmdb.org/t/p/w342' + movie.poster_path"
          :language="movie.original_language"
          :overview="movie.overview"
          :review="movie.vote_average"
        />
      </ul>
    </div>
    <h2 v-if="store.searchTVResults.length !== 0" class="tv">Serie TV</h2>
    <div class="container">
      <ul v-for="series in store.searchTVResults">
        <MovieCard
          :title="series.name"
          :originalTitle="series.original_name"
          :poster="'https://image.tmdb.org/t/p/w342' + series.poster_path"
          :language="series.original_language"
          :overview="series.overview"
          :review="series.vote_average"
        />
      </ul>
    </div>
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
h2 {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: start;
  font-size: 3rem;
}
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: white;
  ul {
    width: calc((100% / 6) - 80px);
  }
}
</style>
