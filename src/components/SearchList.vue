<template>
  <div class="buttons">
    <input
      type="text"
      @keyup.enter="$emit('search')"
      placeholder="Look for a movie or a tv show"
      name="search"
      v-model="store.searchKey"
    />
    <input type="button" value="Search" @click="$emit('search')" />
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "SearchList",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
