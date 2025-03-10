<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

import Footer from '@components/layout/Footer.vue'
import Header from '@components/layout/Header.vue'

import { useComputerStore, Sample as Computers } from '@models/computers'
import { useShipStore, Sample as Ships } from '@models/ships'

useHead({
  title: 'Tech Test 08032024',
  meta: [
    {
      name: 'description',
      content:
        'VueJS 3 tech test with Tailwind, state management, data, and colour schema.',
    },
    { property: 'og:title', content: 'Tech Test 08032024' },
    {
      property: 'og:description',
      content:
        'VueJS 3 tech test with Tailwind, state management, data, and colour schema.',
    },
    { property: 'og:image', content: 'public/logo.png' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'icon', href: 'public/favicon.ico' }],
})

const computers = useComputerStore()
const ships = useShipStore()

onMounted(() => {
  computers.push(Computers())
  ships.push(Ships())
})
</script>

<template>
  <div class="dark:bg-gray-700 flex flex-col min-h-screen">
    <Header />
    <main class="container py-12 md:py-24 flex-1 flex-grow">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
