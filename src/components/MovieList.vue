<template>
  <ul v-for="movie in store.searchResults">
    <MovieCard
      :title="movie.title"
      :originalTitle="movie.original_title"
      :language="movie.original_language"
      :overview="movie.overview"
      :review="movie.vote_average"
    />
  </ul>
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

<style scoped></style>
