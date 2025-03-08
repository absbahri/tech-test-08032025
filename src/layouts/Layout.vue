<script lang="ts" setup>
import { onMounted } from 'vue'
import Header from '@components/layout/Header.vue'
import Footer from '@components/layout/Footer.vue'

onMounted(() => {
  console.log('mounted layout')
})
</script>

<template>
  <Header />
  <main class="container">
    <slot></slot>
  </main>
  <Footer />
</template>
