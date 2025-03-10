<script lang="ts" setup>
import { cn } from '@/utils/cn'

type TWrapper = {
  class?: string
}

const props = defineProps<TWrapper>()
</script>

<template>
  <div
    :class="
      cn(
        'max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
