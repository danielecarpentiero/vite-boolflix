<template>
  <ul v-for="movie in store.searchResults">
    <MovieCard
      :title="movie.title"
      :originalTitle="movie.originalTitle"
      :language="movie.language"
      :review="movie.review"
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
