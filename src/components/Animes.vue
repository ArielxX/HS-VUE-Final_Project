<script setup>
import { ref, computed } from "vue";
import AnimesTable from "./AnimesTable.vue";

const animesList = ref({});

const itemsPerPage = ref(5);
const yearSelected = ref("");
const genresSelected = ref([]);
const filterTitle = ref("");
const sortBy = ref("mal_id");
const sort = ref(0);

try {
  let URL = "https://api.jikan.moe/v4/anime?limit=" + itemsPerPage.value;
  URL += "&genres=" + genresSelected.value;
  URL += "&q=" + filterTitle.value;
  URL += "&order_by=" + sortBy.value;
  URL += "&sort=" + (sort.value === 0 ? "asc" : "desc");
  if (yearSelected.value != "") URL += "&start_date=" + yearSelected.value;
  const animes = await fetch(URL);
  animesList.value = await animes.json();
} catch (error) {
  animesList.value = {
    answer: "Error! Could not reach the API. " + error,
    image: "",
  };
}

const yearsSet = new Set();
const genresSet = new Set();

Object.values(animesList.value.data).forEach((val) => {
  yearsSet.add(val.year);

  Object.values(val.genres).forEach((genre) => {
    genresSet.add(genre.name);
  });
});

yearsSet.delete(null);
const years = Array.from(yearsSet).sort();
const genres = Array.from(genresSet).sort();

function filterByYear(movie) {
  if (yearsSelected.value.length === 0) return true;
  return yearsSelected.value.includes(movie.year);
}

function filterByGenre(movie) {
  if (genresSelected.value.length === 0) return true;
  return genresSelected.value.includes(movie.genre);
}

function filterByTitle(movie) {
  if (filterTitle.value.length < 2) return true;
  const lowerCaseTitle = filterTitle.value.toLowerCase();
  return movie.title.toLowerCase().includes(lowerCaseTitle);
}
</script>

<template>
  <h1>Animes list</h1>
  <AnimesTable :animesList="animesList.data" />
</template>

<style>
h1 {
  color: rgb(25, 10, 71);
  -webkit-text-stroke: 0.8px #fff;
}
</style>
