<template>
  <SearchList @search="search" />
  <MovieList />
</template>

<script>
import axios from "axios";
import SearchList from "./components/SearchList.vue";
import MovieList from "./components/MovieList.vue";
import { store } from "./store";
export default {
  name: "App",
  components: {
    SearchList,
    MovieList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      axios
        .get(this.store.movieAPI, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
            language: "it-IT",
          },
        })
        .then((response) => {
          this.store.searchMovieResults = response.data.results;
        });
      axios
        .get(this.store.tvAPI, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
            language: "it-IT",
          },
        })
        .then((response) => {
          this.store.searchTVResults = response.data.results;
        });
    },
    created() {
      this.search();
    },
  },
};
</script>

<style scoped></style>
