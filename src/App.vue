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

<style scoped>
/* .main-body {
  background-image: url("https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5lyavS59mazOFnb55Z6znQ.png");
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>
