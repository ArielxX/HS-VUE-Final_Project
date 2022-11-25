<script setup>
defineProps({
  disabled: Boolean,
});
</script>
<template>
  <button :disabled="disabled" :class="{ disabled: disabled }">
    <slot />
  </button>
</template>

<style scoped>
button {
  margin: 10px;
}

.disabled {
  opacity: 85%;
}
</style>
