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
    <div class="review">
      <span v-for="n in fullStars" :key="n">
        <font-awesome-icon :icon="['fas', 'star']"
      /></span>
      <span v-for="n in emptyStars" :key="n">
        <font-awesome-icon :icon="['far', 'star']"
      /></span>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "MovieCard",
  data() {
    return {
      CountryFlag,
    };
  },
  props: ["title", "originalTitle", "poster", "language", "overview", "review"],
  components: {
    CountryFlag,
  },
  computed: {
    fullStars() {
      return Math.ceil(this.review / 2);
    },
    emptyStars() {
      return 5 - this.fullStars;
    },
  },
};
</script>

<style scoped>
.review {
  display: flex;
}
</style>
