<script setup>
import { ref } from "vue";
import AnimesList from "./AnimesList.vue";

const itemsPerPage = ref(10);
const yearFrom = ref("");
const yearTo = ref("");
const genresSelected = ref([]);
const filterTitle = ref("");
const filterStatus = ref("");
const filterRating = ref("");
const minimumScore = ref("");
const sortBy = ref("mal_id");
const sort = ref(true);

const years = [];
for (let i = 1961; i <= 2022; i++) {
  years.push(i);
}

let genres = ref({});
try {
  let URL = "https://api.jikan.moe/v4/genres/anime";
  const res = await fetch(URL);
  genres.value = await res.json();
} catch (error) {
  genres.value = {
    answer: "Error! Could not reach the API. " + error,
    image: "",
  };
}

const statuses = ["airing", "complete", "upcoming"];
const ratings = {
  g: "All Ages",
  pg: "Children",
  pg13: "Teens 13 or older",
  r17: "17+ (violence & profanity)",
  r: "Mild Nudity",
  rx: "Hentai",
};

const sortByList = ["title", "type", "rating", "start_date", "score"];
</script>

<template>
  <div class="container">
    <h3>Filters</h3>
    <div class="card">
      <div class="container">
        <div class="filters">
          <div class="filter">
            <div class="card">
              <div class="container">
                <div class="filters">
                  <div class="filter">
                    <h4>Search</h4>
                  </div>
                  <input v-model="filterTitle" type="text" /> <br />
                </div>
                <br />
                <br />
                <div class="filters">
                  <div class="filter">
                    <h4>Minimum Score</h4>
                  </div>
                  <input v-model="minimumScore" type="number" /> <br />
                </div>
                <br />
                <br />
                <div class="filters">
                  <div class="filter">
                    <h4>Items per Page</h4>
                  </div>
                  <select name="itemsPerPage" v-model="itemsPerPage">
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>25</option>
                  </select>
                </div>
                <br />
                <br />
                <div class="filters">
                  <div class="filter">
                    <h4>Status</h4>
                  </div>
                  <select name="filterStatus" v-model="filterStatus">
                    <option v-for="status in statuses">{{ status }}</option>
                  </select>
                </div>
                <br />
                <br />
                <div class="filters">
                  <div class="filter">
                    <h4>Rating</h4>
                  </div>
                  <select name="filterRating" v-model="filterRating">
                    <option
                      v-for="rating in Object.keys(ratings)"
                      :value="rating"
                    >
                      {{ ratings[rating] }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="filter selector">
            <div class="card">
              <div class="container">
                <h4>Years:</h4>
                <br />
                <div class="filters">
                  <div class="filter">
                    <h5>From:</h5>
                  </div>
                  <select name="year" v-model="yearFrom">
                    <option v-for="year in years" v-bind:value="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
                <br />
                <br />
                <div class="filters">
                  <div class="filter">
                    <h5>To:</h5>
                  </div>
                  <select name="year" v-model="yearTo">
                    <option v-for="year in years" v-bind:value="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="card">
              <div class="filters">
                <div class="filter">
                  <h4>Order by</h4>
                </div>
                <select name="sortBy" v-model="sortBy">
                  <option v-for="column in sortByList">{{ column }}</option>
                </select>
                <span>
                  <input type="checkbox" id="checkbox" v-model="sort" />
                  <h4>Increasing</h4>
                </span>
              </div>
            </div>
          </div>
          <div class="filter selector">
            <div class="card">
              <div class="container">
                <h4>Genres:</h4>
                <br />
                <select class="multi-select" v-model="genresSelected" multiple>
                  <option v-for="genre in genres.data" :value="genre.mal_id">
                    {{ genre.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1>Animes list</h1>
  <AnimesList
    :itemsPerPage="itemsPerPage"
    :yearFrom="yearFrom"
    :yearTo="yearTo"
    :genresSelected="genresSelected"
    :filterTitle="filterTitle"
    :filterStatus="filterStatus"
    :filterRating="filterRating"
    :minimumScore="minimumScore"
    :sortBy="sortBy"
    :sort="sort"
  />

  <br />
  <br />
  <br />
</template>

<style>
select,
input {
  width: 50%;
  height: 20px;
  background-color: rgb(214, 195, 214);
  color: black;
}
.multi-select {
  height: 260px;
}
.filters {
  display: flex;
}
.filter {
  flex: 60%;
}
h1,
h4 {
  padding: 0;
  margin: 0;
}
h3,
h4,
h5 {
  color: black;
}

h5 {
  margin: 0;
}
.selector {
  margin-left: 20px;
}
input {
  width: 75%;
  max-width: 200px;
  background-color: rgb(214, 195, 214);
  color: black;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0.3rem;
}
.container {
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 8px 16px;
  min-height: 0;
}
</style>
