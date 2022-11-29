<script setup>
import { ref, computed } from "vue";
import AnimeCard from "./AnimeCard.vue";
import DetailsCards from "./DetailsCards.vue";
import AnimeCharacters from "./AnimeCharacters.vue";

const { id } = defineProps(["id"]);

const anime = ref({});
const characters = ref({});

try {
  let URL_anime = "https://api.jikan.moe/v4/anime/" + id + "/full";
  const res_anime = await fetch(URL_anime);
  anime.value = await res_anime.json();

  let URL_characters = "https://api.jikan.moe/v4/anime/" + id + "/characters";
  const res_characters = await fetch(URL_characters);
  characters.value = await res_characters.json();
} catch (error) {
  anime.value = {
    answer: "Error! Could not reach the API. " + error,
    image: "",
  };
}
</script>

<template>
  <div class="container">
    <center>
      <div class="card">
        <AnimeCard :anime="anime.data"></AnimeCard>
      </div>
    </center>
    <div v-if="anime.data.trailer.url" class="container">
      <h1>Watch Trailer</h1>
      <a :href="anime.data.trailer.url">
        <img :src="anime.data.trailer.images.large_image_url"
      /></a>
    </div>
    <div class="container">
      <AnimeCharacters :characters="characters.data"></AnimeCharacters>
    </div>
    <div class="container anime-info">
      <div class="container">
        <div class="container">
          <p style="font-size: 18px">
            Episodes: {{ anime.data.episodes }} &nbsp &nbsp &nbsp &nbsp &nbsp
            Duration: {{ anime.data.duration }} &nbsp &nbsp &nbsp &nbsp &nbsp
            Status: {{ anime.data.status }} &nbsp &nbsp &nbsp &nbsp &nbsp
            Source: {{ anime.data.source }} &nbsp &nbsp &nbsp &nbsp &nbsp
            Favorites: {{ anime.data.favorites }} 🧡
          </p>
        </div>
        <div v-if="anime.data.genres && anime.data.genres.length > 0">
          <h2>Genres</h2>
          <DetailsCards :elements="anime.data.genres"></DetailsCards>
        </div>

        <div v-if="anime.data.themes && anime.data.themes.length > 0">
          <h2>Themes</h2>
          <DetailsCards :elements="anime.data.themes"></DetailsCards>
        </div>

        <div v-if="anime.data.studios && anime.data.studios.length > 0">
          <h2>Studios</h2>
          <DetailsCards :elements="anime.data.studios"></DetailsCards>
        </div>
      </div>
      <div v-if="anime.data.background" class="container">
        <h2>Background:</h2>
        {{ anime.data.background }}
      </div>
      <div class="container">
        <div v-if="anime.data.external && anime.data.external.length > 0">
          <h2>External Links</h2>
          <DetailsCards :elements="anime.data.external"></DetailsCards>
        </div>
        <div v-if="anime.data.streaming && anime.data.streaming.length > 0">
          <h2>Streaming</h2>
          <DetailsCards :elements="anime.data.streaming"></DetailsCards>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<style>
.container {
  min-height: auto;
}
h2 {
  font-size: 20px;
}
</style>
