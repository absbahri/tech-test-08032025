<script lang="ts" setup>
import { type Type } from '@/models/ships'
import Button from '@components/ui/button/Button.vue'
import { ArrowRight } from 'lucide-vue-next'
const props = defineProps<{
  title: string
  link: string
  description?: string
}>()
</script>

<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="h-full flex flex-col">
      <RouterLink to="{{ props.link }}" v-if="props.title">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-brand-tertiary dark:text-white"
        >
          {{ props.title }}
        </h5>
      </RouterLink>
      <div class="mb-2" v-if="description">
        <p>{{ description }}</p>
      </div>
      <slot />
      <div class="mt-auto">
        <RouterLink :to="props.link">
          <Button variant="primary" class="mt-6"
            >View more <ArrowRight
          /></Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
