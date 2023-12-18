<template>
  <header>
    <img
      src="https://boolfix-jdonzelli.netlify.app/img/logo.png"
      alt=""
      srcset=""
    />
    <SearchList @search="search" />
  </header>
</template>

<script>
import SearchList from "./SearchList.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "Header",
  components: {
    SearchList,
  },
  data() {
    return { store };
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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
}
</style>
