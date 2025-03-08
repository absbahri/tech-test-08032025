<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const shipId = route.params.id
</script>

<template>
  <h1 class="text-xl">SHIP PAGE: {{ shipId }}</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
