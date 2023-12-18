<template class="main-body">
  <Header />
  <MovieList />
</template>

<script>
import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";
export default {
  name: "App",
  components: {
    Header,
    MovieList,
  },
};
</script>

<style scoped></style>
