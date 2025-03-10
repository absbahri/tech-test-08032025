<script lang="ts" setup>
import { cn } from '@/utils/cn'

type THelper = {
  text: string
  error?: string
}

const props = defineProps<THelper>()
</script>

<template>
  <p
    :class="
      cn('mt-2 text-sm text-gray-500 dark:text-gray-400', {
        '!text-red-500': props.error,
      })
    "
  >
    {{ props.text }}
  </p>
</template>
