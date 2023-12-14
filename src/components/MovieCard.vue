<template>
  <h2>{{ title }}</h2>
  <h3>titolo originale: {{ originalTitle }}</h3>
  <h4>{{ language }}</h4>
  <h5>{{ review }}</h5>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["title", "originalTitle", "language", "review"],
};
</script>

<style scoped></style>
