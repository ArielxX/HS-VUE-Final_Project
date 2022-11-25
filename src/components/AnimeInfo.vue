<script setup>
import { ref, computed } from "vue";
import AnimeCard from "./AnimeCard.vue";

const { id } = defineProps(["id"]);

const anime = ref({});
const characters = ref({});

try {
  let URL_anime = "https://api.jikan.moe/v4/anime/" + id;
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
  <center>
    <div class="card">
      <AnimeCard :anime="anime.data"></AnimeCard>
    </div>
  </center>
  <hr />
</template>

<style></style>
