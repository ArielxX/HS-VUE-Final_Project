<script setup>
const props = defineProps({
  animesList: {},
});
</script>

<template>
  <div class="table-concept">
    <table>
      <caption></caption>
      <thead>
        <tr>
          <th width="40px"></th>
          <th>Title</th>
          <th width="100px">Year</th>
          <th width="200px">Status</th>
          <th width="200px">Type</th>
          <th width="200px">Genres</th>
          <th width="220px">Rating</th>
          <th width="100px">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="anime in animesList.data" :key="anime.mal_id">
          <td>
            <img class="table-icons" :src="anime.images.jpg.small_image_url" />
          </td>
          <td>
            <router-link
              :to="{ name: 'animePage', params: { id: anime.mal_id } }"
            >
              <div class="anime-link">
                <p>
                  {{ anime.title || "------" }}
                </p>
              </div>
            </router-link>
          </td>
          <td>
            {{ anime.year || "------" }}
          </td>
          <td>
            {{ anime.status || "------" }}
          </td>
          <td>
            {{ anime.type || "------" }}
          </td>
          <td>
            <span v-for="genre in anime.genres">{{ genre.name }}<br /></span>
          </td>
          <td>
            {{ anime.rating || "------" }}
          </td>
          <td>
            {{ anime.score || "------" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
}
table,
th,
td {
  border: 1px solid;
}

table {
  background-color: #baafd5;
  opacity: 90%;
  font-size: 16px;
  border-collapse: collapse;
}
.table-icons {
  height: 80px;
  width: 60px;
}
.table-concept table tr:last-child td {
  border-bottom: 0;
}
.table-concept table tr th,
.table-concept table tr td {
  text-align: left;
  padding: 15px;
  box-sizing: border-box;
}
.table-concept table tr * {
  color: black;
}
.table-concept table tr p {
  color: rgb(37, 37, 80);
  font-weight: bold;
}
.table-concept table tr th {
  color: #ffffff;
  font-weight: normal;
  background-color: #8f8f8f;
  border-bottom: solid 2px #d8d8d8;
  position: sticky;
  top: 0;
}
.table-concept table tr td {
  border: solid 1px #d8d8d8;
  border-left: 0;
  border-right: 0;
  white-space: nowrap;
}
.table-concept table tbody tr {
  transition: background-color 150ms ease-out;
}
.table-concept table tbody tr:nth-child(2n) {
  background-color: whitesmoke;
}
.table-concept table tbody tr:hover {
  background-color: #ebebeb;
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
