<template>
  <SearchList @search="search" />
  <MovieList />
</template>

<script>
import axios from "axios";
import SearchList from "./SearchList.vue";
import MovieList from "./MovieList.vue";
import { store } from "../store";
export default {
  name: "Main",
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
      axios.get(this.store.movieAPI).then((response) => {
        this.store.searchResults = response.data.results;
      });
    },
    created() {
      this.search();
    },
  },
};
</script>

<style scoped></style>
