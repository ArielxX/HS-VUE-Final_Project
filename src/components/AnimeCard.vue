<script setup>
import { ref } from "vue";
import ratingStar from "./RatingStar.vue";

const props = defineProps({
  anime: {},
});

console.log(props.anime);
</script>

<template>
  <div class="anime-card">
    <div class="column">
      <div class="anime-card__content">
        <div class="anime-card__header">
          <div class="anime-icon">
            <img :src="anime.images.jpg.image_url" />
          </div>
          <div class="anime_basics">
            <h1 class="anime-card__title">
              {{ anime.title }}
            </h1>

            <div class="anime-card__score">
              Score:
              <ratingStar :score="Number(anime.score)"></ratingStar>
              {{ anime.score }} / 10
            </div>
            <p class="anime-card__year">Year: {{ anime.year }}</p>
          </div>
        </div>

        <p class="anime-card__desc">{{ anime.synopsis }}</p>
      </div>
    </div>
    <div>
      <img :src="anime.images.jpg.large_image_url" />
    </div>
  </div>
</template>

<style>
* {
  color: black;
  font-size: 15px;
}
.anime-card {
  flex: 1;
  display: flex;
  flex-basis: 300px;
  flex-grow: 0;
  height: fit-content;
  width: 800px;
  height: 100%;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-size: 200px 350px;
  background: linear-gradient(to right, white, rgb(104, 25, 8));
  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}
li {
  display: inline-block;
  padding: 5px;
  white-space: normal;
}
.anime-card__content {
  margin: 10px;
}
.anime-card__desc {
  font-size: 10px;
  margin-top: 30px;
}
.column {
  flex: 70%;
}
.anime-card img {
  width: 400px;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  filter: invert(40%);
  -webkit-filter: invert(40%);
}
.anime-card__header {
  display: flex;
}
.anime-card__header h1 {
  font-size: 23px;
}
.anime-card__year {
  margin-top: 10px;
  font-size: 15px;
}
.anime-card__header img {
  width: 100px;
  height: auto;
  filter: invert(0);
}
.anime-card__score {
  bottom: 5px;
}
.anime-card__score * {
  font-size: 10px;
}
.anime_basics {
  text-align: left;
  margin-left: 15px;
}
</style>
