<script setup>
import { ref, watch } from "vue";
import AnimesTable from "./AnimesTable.vue";
import MyButton from "./MyButton.vue";

const props = defineProps({
  itemsPerPage: 10,
  yearFrom: "",
  yearTo: "",
  genresSelected: {},
  filterTitle: "",
  filterStatus: "",
  filterRating: "",
  minimumScore: "",
  sortBy: "",
  sort: true,
});

const page = ref(1);
const totalPages = ref(1);
const animesList = ref({});

async function fetchList() {
  try {
    let URL = "https://api.jikan.moe/v4/anime?limit=" + props.itemsPerPage;
    URL += "&page=" + page.value;
    URL += "&genres=" + Array.from(props.genresSelected.values());
    URL += "&letter=" + props.filterTitle;
    URL += "&score=8.6";
    URL += "&status=" + props.filterStatus;
    URL += "&rating=" + props.filterRating;
    URL += "&score=" + props.minimumScore;
    URL += "&order_by=" + props.sortBy;
    URL += "&sort=" + (props.sort === true ? "asc" : "desc");
    if (props.yearFrom != "") URL += "&start_date=" + props.yearFrom;
    if (props.yearTo != "") URL += "&end_date=" + props.yearTo;
    const animes = await fetch(URL);
    animesList.value = await animes.json();
    totalPages.value = animesList.value.pagination.last_visible_page;
    page.value = 1;
  } catch (error) {
    animesList.value = {
      answer: "Error! Could not reach the API. " + error,
      image: "",
    };
  }
}

fetchList();

watch(
  () => [
    props.itemsPerPage,
    props.yearFrom,
    props.yearTo,
    props.genresSelected,
    props.filterTitle,
    props.filterStatus,
    props.filterRating,
    props.minimumScore,
    props.sortBy,
    props.sort,
    page.value,
  ],
  () => {
    fetchList();
  }
);

function goToPrev() {
  page.value--;
}

function goToNext() {
  page.value++;
}
</script>

<template>
  <Suspense>
    <AnimesTable :animesList="animesList" />
    <template #fallback>
      <div>
        <img src="/loading.gif" />
        <h3>Loading</h3>
      </div>
    </template>
  </Suspense>
  <div class="pagination">
    <MyButton :disabled="page <= 1" @click="page = 1"> First page </MyButton>
    <MyButton :disabled="page <= 1" @click="goToPrev"> &lt; </MyButton>
    {{ page }} / {{ totalPages }}
    <MyButton :disabled="page === totalPages" @click="goToNext">
      &gt;
    </MyButton>
    <MyButton :disabled="page === totalPages" @click="page = totalPages">
      Last page
    </MyButton>
  </div>
</template>

<style>
.pagination {
  height: 80px;
  background-color: #8f8f8f;
  position: sticky;
  bottom: 0;
  right: 5px;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  text-align: center;
  opacity: 85%;
}
.pagination > label {
  background-color: #8f8f8f;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
  font-size: 50px;
}
.pagination > label:hover {
  background-color: darkgray;
}
.pagination > label:active {
  background-color: #767676;
}
.pagination {
  background-color: #8f8f8f;
  position: sticky;
  bottom: 0;
  right: 5px;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  text-align: center;
}
.pagination > label {
  background-color: #8f8f8f;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
}
.pagination > label:hover {
  background-color: darkgray;
}
.pagination > label:active {
  background-color: #767676;
}
</style>
