<script setup>
import { ref, computed, watch } from "vue";
import Animes from "./components/Animes.vue";
</script>

<template>
  <Suspense>
    <Animes />
    <template #fallback>
      <div>
        <img src="/loading.gif" />
        <h3>Loading</h3>
      </div>
    </template>
  </Suspense>
</template>

<style scoped></style>
