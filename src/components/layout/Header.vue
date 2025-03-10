<script lang="ts" setup>
import { House } from 'lucide-vue-next'
import Button from '@components/ui/button/Button.vue'
</script>

<template>
  <header class="border-b border-brand-grey bg-gray-100 dark:bg-gray-800">
    <div class="container flex flex-row justify-between items-center py-4">
      <div class="w-24 flex flex-row gap-4 items-center">
        <img src="/logo.png" class="logo w-12" alt="GT Maritime" />
        <p class="sr-only">GT Maritime</p>
        <p class="whitespace-nowrap font-bold text-lg">GT Maritime</p>
      </div>
      <nav>
        <ul class="flex flex-row gap-4">
          <li>
            <RouterLink to="/" class="font-bold flex flex-row"
              ><Button variant="secondary" class="!mt-0">Home <House /></Button>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
