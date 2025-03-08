<script lang="ts" setup>
import { onMounted } from 'vue'
import Header from '@components/layout/Header.vue'
import Footer from '@components/layout/Footer.vue'
import useComputerStore from '@models/computers/store'
import sampleComputers from '@/models/computers/sampledata'

const computers = useComputerStore()
computers.push(sampleComputers())

onMounted(async () => {})
</script>

<template>
  <Header />
  <pre>
    <li v-for="computer in computers.state" :key="computer.id">{{ computer.computerName }}</li>
  </pre>
  <main class="container">
    <slot></slot>
  </main>
  <Footer />
</template>
