<template>
  <div class="buttons">
    <input
      class="text"
      type="text"
      @keyup.enter="$emit('search')"
      placeholder="Look for a movie or a tv show"
      name="search"
      v-model="store.searchKey"
    />
    <input
      class="button"
      type="button"
      value="Search"
      @click="$emit('search')"
    />
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

<style scoped>
.button {
  margin-left: 10px;
  cursor: pointer;
  background-color: red;
  color: white;
  padding: 0 5px;
}
</style>
