<script setup>
import { ref } from "vue";
const props = defineProps({ score: Number });
const MARKER = "★";

const normalizedScore = ref(Math.ceil((props.score - 1) / 2));
</script>

<template>
  <span v-for="index in normalizedScore" :key="index" class="yellow-star">
    {{ MARKER }}
  </span>
  <span
    v-for="index in parseInt(5 - normalizedScore)"
    :key="index"
    class="blank-star"
  >
    {{ MARKER }}
  </span>
</template>

<style>
.yellow-star {
  color: gold;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
}
.blank-star {
  color: white;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
}
</style>
