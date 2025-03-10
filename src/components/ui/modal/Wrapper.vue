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
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Button
        variant="ghost"
        class="absolute top-8 right-8 !mt-0"
        :onClick="
          () => {
            buttonClick()
            props.onClose && props.onClose()
          }
        "
      >
        <X />
      </Button>
      <slot></slot>
    </div>
  </div>
</template>
