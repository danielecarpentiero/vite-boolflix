<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>titolo originale: {{ originalTitle }}</h3>
    <img :src="poster" alt="" />
    <h4 v-if="language === 'ja'">
      Lingua: <country-flag country="jp" size="medium" />
    </h4>
    <h4 v-else-if="language === 'en'">
      Lingua: <country-flag country="us" size="medium" />
    </h4>
    <h4 v-else-if="language === 'it'">
      Lingua: <country-flag country="it" size="medium" />
    </h4>
    <h4 v-else>Lingua: <country-flag :country="language" size="medium" /></h4>
    <h4>Trama: {{ overview }}</h4>
    <h5>Voto: {{ Math.round(review / 2) }}</h5>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "MovieCard",
  props: ["title", "originalTitle", "poster", "language", "overview", "review"],
  components: {
    CountryFlag,
  },
};
</script>
