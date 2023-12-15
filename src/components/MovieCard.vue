<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>titolo originale: {{ originalTitle }}</h3>
    <!--   <h4><CountryFlag :country="language" /></h4> -->
    <h4 v-if="language === 'ja'">
      <country-flag country="jp" size="medium" />
    </h4>
    <h4 v-if="language === 'en'">
      <country-flag country="us" size="medium" />
    </h4>
    <h4 v-if="language === 'it'">
      <country-flag country="it" size="medium" />
    </h4>

    <h4>Trama: {{ overview }}</h4>
    <h5>Voto: {{ review }}</h5>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "MovieCard",
  props: ["title", "originalTitle", "language", "overview", "review"],
  components: {
    CountryFlag,
  },
};
</script>
