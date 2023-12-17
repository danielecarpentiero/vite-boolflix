<template>
  <SearchList @search="search" />
</template>

<script>
import SearchList from "./SearchList.vue";
export default {
  name: "Header",
  components: {
    SearchList,
  },
};
</script>

<style scoped></style>
