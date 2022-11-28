<script setup>
const props = defineProps({ elements: {} });
</script>

<template>
  <ul>
    <li v-for="element in elements">
      <a class="genre_card" :href="element.url">{{ element.name }}</a>
    </li>
  </ul>
</template>

<style>
.anime-info {
  color: rgb(4, 18, 42);
  font-weight: 600;
}
li {
  display: inline-block;
  padding: 5px;
  white-space: normal;
  margin-bottom: 20px;
}
.genre_card {
  font-family: Arial;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 22px;
  background: rgba(122, 56, 23, 0.2);
  border: 1px solid #e0570d;
  border-radius: 20px;
  font-weight: 600;
  color: black;
}

.genre_card:hover {
  color: #110d3b;
  background: rgba(207, 120, 120, 0.2);
  border: 2px solid #300404;
  font-size: 25px;
  border-radius: 10px;
}
</style>
