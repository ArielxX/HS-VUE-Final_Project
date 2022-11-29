<script setup>
import { ref } from "vue";
import CharacterCard from "./CharacterCard.vue";

const props = defineProps({
  characters: {},
});
</script>

<template>
  <div>
    <h1>Characters</h1>
    <div id="character-card-list">
      <ul>
        <li v-for="character in characters">
          <CharacterCard :character="character"></CharacterCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#character-card-list ul {
  padding-inline-start: 20px;
  white-space: nowrap;
  padding-bottom: 30px;
}
li {
  display: inline-block;
  padding: 5px;
  white-space: normal;
}
#character-card-list {
  overflow-x: auto;
}
</style>
