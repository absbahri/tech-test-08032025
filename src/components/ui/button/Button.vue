<script lang="ts" setup>
import { cn } from '@/utils/cn'

type Button = {
  aria?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | 'link'
  variant: 'primary' | 'secondary' | 'error' | 'error' | 'success'
  size?: 'xs' | 'sm' | 'md'
}

defineProps<Button>()
</script>

<template>
  <button
    :onclick="() => onClick && onClick()"
    :class="
      cn(
        'btn flex px-4 py-2 rounded-lg gap-2 flex-row cursor-pointer items-center justify-center ease-in-out duration-300',
        {
          'text-white bg-brand-primary border-2 border-brand-primary hover:bg-brand-tertiary hover:text-white':
            variant === 'primary',
          'text-black bg-brand-secondary border-2 border-brand-secondary hover:bg-brand-tertiary hover:text-white':
            variant === 'secondary',
          'text-white bg-red-500 border-2 border-red-500 hover:bg-red-600':
            variant === 'error',
          'text-white bg-red-500 border-2 border-red-500 hover:bg-red-600':
            variant === 'danger',
          'text-white bg-green-500 border-2 border-green-500 hover:bg-green-600':
            variant === 'success',
          'cursor-not-allowed opacity-50': disabled,
          'text-sm !py-1.5 !px-2 gap-1': size === 'sm',
          'text-sm !py-1 !px-1 gap-1': size === 'xs',
        },
      )
    "
  >
    <slot></slot>
  </button>
</template>
