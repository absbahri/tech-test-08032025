<script lang="ts" setup>
import { cn } from '@/utils/cn'
import Button from '@components/ui/button/Button.vue'
import { X } from 'lucide-vue-next'
type TWrapper = {
  onClose?: () => void
  open: boolean
}

const props = withDefaults(defineProps<TWrapper>(), {
  open: false,
})

const emit = defineEmits(['closed'])

const buttonClick = () => {
  emit('closed')
}
</script>

<template>
  <div
    :class="
      cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.5)]',
        {
          hidden: !props.open,
        },
      )
    "
  >
    <Button
      variant="secondary"
      class="absolute top-4 right-4 !p-4"
      :onClick="
        () => {
          buttonClick()
          props.onClose && props.onClose()
        }
      "
    >
      <X />
    </Button>
    <h1 class="text-white absolute left-1/2 top-4">{{ props.open }}</h1>
    <slot></slot>
  </div>
</template>
