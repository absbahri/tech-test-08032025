<script lang="ts" setup>
import { onMounted } from 'vue'
import Footer from '@components/layout/Footer.vue'
import Header from '@components/layout/Header.vue'

import { useComputerStore, Sample as Computers } from '@models/computers'

import { useShipStore, Sample as Ships } from '@models/ships'

const computers = useComputerStore()
const ships = useShipStore()

onMounted(() => {
  computers.push(Computers())
  ships.push(Ships())
})
</script>

<template>
  <Header />
  <main class="container py-12 md:py-24">
    <slot></slot>
  </main>
  <Footer />
</template>
