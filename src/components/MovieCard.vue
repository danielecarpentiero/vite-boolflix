<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>titolo originale: {{ originalTitle }}</h3>
    <h4>Lingua: {{ language }}</h4>
    <h4>Trama: {{ overview }}</h4>
    <h5>Voto: {{ review }}</h5>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["title", "originalTitle", "language", "overview", "review"],
};
</script>
