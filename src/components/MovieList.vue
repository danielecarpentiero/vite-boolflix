<template>
  <div v-if="store.searchMovieResults.length === 0" class="home">
    Cerca qualcosa nella barra qui in alto...
  </div>
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
.main-body {
  background-image: url("https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5lyavS59mazOFnb55Z6znQ.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.home {
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-top: 20px;
}

h2 {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: start;
  font-size: 3rem;
  padding: 20px;
  margin: 0;
}
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: white;
}

@media only screen and (min-width: 1200px) {
  .container ul {
    width: calc((100% / 6) - 80px);
  }
}

/* Impostazioni per schermi medi */
@media only screen and (max-width: 1199px) and (min-width: 768px) {
  .container ul {
    width: calc((100% / 3) - 20px);
  }
}

/* Impostazioni per schermi più piccoli */
@media only screen and (max-width: 767px) {
  .container ul {
    width: calc((100% / 2) - 20px);
  }
}
</style>
