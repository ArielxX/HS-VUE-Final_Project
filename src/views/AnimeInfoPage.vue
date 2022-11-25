<script setup>
import { ref } from "vue";
import AnimeInfo from "../components/AnimeInfo.vue";

const { id } = defineProps(["id"]);
</script>

<template>
  <div class="container">
    <h1>Anime Detail</h1>
    <Suspense>
      <AnimeInfo :id="id" />
      <template #fallback>
        <div>
          <img src="/loading.gif" />
          <h3>Loading</h3>
        </div>
      </template>
    </Suspense>
  </div>
</template>
<style></style>
