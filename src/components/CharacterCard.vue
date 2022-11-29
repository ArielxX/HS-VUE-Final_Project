<script setup>
const props = defineProps({
  character: {},
});
</script>

<template>
  <div class="character-card">
    <a :href="character.character.url">
      <div class="container">
        <div>
          <img
            class="character_img"
            :src="character.character.images.jpg.image_url"
          />
        </div>
        <h3>{{ character.character.name }}</h3>
        <h4>Role: {{ character.role }}</h4>
      </div>
    </a>
  </div>
</template>

<style>
.character-card {
  width: 300px;
}
.character-card h3,
h4 {
  color: black;
}
.character_img {
  height: 150px;
  opacity: 100%;
}
</style>
