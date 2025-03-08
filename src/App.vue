<script lang="ts" setup>
import PageLayout from '@layouts/Layout.vue'
</script>

<template>
  <PageLayout>
    <div>
      <h2>Computers</h2>
      <ul>
        <li v-for="computer in computers" :key="computer.id">
          {{ computer.name }}
        </li>
      </ul>

      <h2>Ships</h2>
      <ul>
        <li v-for="ship in ships" :key="ship.id">
          {{ ship.name }}
        </li>
      </ul>
    </div>
    <RouterView />
  </PageLayout>
</template>

<style scoped></style>
