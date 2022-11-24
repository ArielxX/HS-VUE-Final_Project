<script setup>
import Animes from "../components/Animes.vue";
</script>

<template>
  <div class="container">
    <Suspense>
      <Animes />
      <template #fallback>
        <div>
          <img src="/loading.gif" />
          <h3>Loading</h3>
        </div>
      </template>
    </Suspense>
  </div>
</template>
