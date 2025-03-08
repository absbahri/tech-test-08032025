<script lang="ts" setup>
import { House } from 'lucide-vue-next'
import Button from '@components/ui/button/Button.vue'
</script>

<template>
  <header class="border-b border-brand-grey bg-gray-100">
    <div class="container flex flex-row justify-between items-center py-4">
      <div class="w-12">
        <img src="/logo.png" class="logo" alt="GT Maritime" />
      </div>
      <nav>
        <ul class="flex flex-row gap-4">
          <li>
            <RouterLink to="/" class="font-bold text-xl flex flex-row"
              ><Button variant="secondary">Home <House class="ml-2" /></Button>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
