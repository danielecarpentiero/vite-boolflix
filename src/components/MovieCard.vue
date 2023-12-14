<template>
  <h2>{{ title }}</h2>
  <h3>Titolo originale: {{ originalTitle }}</h3>
  <h4 v-if="language === 'en'">Lingua: {{ language }}</h4>
  <h5>Voto: {{ review }}</h5>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["title", "originalTitle", "language", "review"],
};
</script>

<style scoped></style>
