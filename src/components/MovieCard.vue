<template>
  <li>
    <div class="info">
      <h2>{{ title }}</h2>
      <h3>titolo originale: {{ originalTitle }}</h3>
      <h4 v-if="language === 'ja'">
        Lingua: <country-flag country="jp" size="medium" />
      </h4>
      <h4 v-else-if="language === 'en'">
        Lingua: <country-flag country="gb" size="medium" />
      </h4>
      <h4 v-else-if="language === 'it'">
        Lingua: <country-flag country="it" size="medium" />
      </h4>
      <h4 v-else>Lingua: <country-flag :country="language" size="medium" /></h4>
      <h4>Trama: {{ overview }}</h4>
      <div class="review">
        <span v-if="fullStars > 0" v-for="n in fullStars" :key="n">
          <font-awesome-icon :icon="['fas', 'star']"
        /></span>
        <span v-if="emptyStars > 0" v-for="n in emptyStars" :key="n">
          <font-awesome-icon :icon="['far', 'star']"
        /></span>
        <p v-if="emptyStars === 5">Non ci sono recensioni disponibili.</p>
      </div>
    </div>
    <img :src="poster" alt="" @error="handleImageError" />
  </li>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "MovieCard",
  data() {
    return {
      CountryFlag,
      placeHolderImage:
        "https://popcornsg.s3.amazonaws.com/movies/300/1745-10843-LostInHo.png",
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
  methods: {
    handleImageError(event) {
      event.target.src = this.placeHolderImage;
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  display: inline-block;
  position: relative;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  width: 100%;
  height: 98%;
  opacity: 0;
  transition: opacity 0.3s ease;
  max-height: 100%;
  overflow-y: auto;
}

li:hover .info {
  opacity: 1;
}
</style>
