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
      console.log(this.store.searchKey);
      axios.get(this.store.movieAPI + this.store.searchKey).then((response) => {
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
