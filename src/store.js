import { reactive } from "vue";

export const store = reactive({
  movieAPI:
    "https://api.themoviedb.org/3/search/movie?api_key=6de0cfc51e874bc458869a29da0ff726&query=",
  searchKey: "",
  searchResults: [],
});
