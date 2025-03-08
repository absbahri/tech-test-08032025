<script lang="ts" setup>
import { cn } from '@/utils/cn'

type Button = {
  aria?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | 'link'
  variant: 'primary' | 'secondary' | 'error'
}

defineProps<Button>()
</script>

<template>
  <button
    :onclick="onClick"
    :class="
      cn(
        'btn flex px-4 py-2 rounded-lg flex-row cursor-pointer items-center justify-center ease-in-out duration-300',
        {
          'text-white bg-brand-primary border-2 border-brand-primary hover:bg-brand-tertiary hover:text-white':
            variant === 'primary',
          'text-black bg-brand-secondary border-2 border-brand-secondary hover:bg-brand-tertiary hover:text-white':
            variant === 'secondary',
          'btn-error': variant === 'error',
        },
      )
    "
  >
    <slot></slot>
  </button>
</template>
