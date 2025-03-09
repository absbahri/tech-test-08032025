<script lang="ts" setup>
import { cn } from '@/utils/cn'
import Button from '@components/ui/button/Button.vue'
type TWrapper = {
  onClose?: () => void
  open: boolean
}

const props = withDefaults(defineProps<TWrapper>(), {
  open: false,
})
</script>

<template>
  <div
    :class="
      cn('fixed inset-0 z-50 flex items-center justify-center', {
        hidden: !props.open,
      })
    "
  >
    <Button
      variant="secondary"
      @click="
        () => {
          props.open = false
          props.onClose && props.onClose()
        }
      "
    ></Button>
    <slot></slot>
  </div>
</template>
