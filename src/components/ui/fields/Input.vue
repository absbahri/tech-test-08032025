<script lang="ts" setup>
import { cn } from '@/utils/cn'

type TInput = {
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  name?: string
  placeholder?: string
  modelValue?: string
  error?: string
  disabled?: boolean
  required?: boolean
}

const props = defineProps<TInput>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <input
    :id="props.id"
    :type="props.type ?? 'text'"
    :name="props.name"
    :placeholder="props.placeholder"
    v-model="props.modelValue"
    :required="props.required"
    :disabled="props.disabled"
    @input="(e) => emit('update:modelValue', (e.target as any).value)"
    :class="
      cn('border border--brand-tertiary dark:border-gray-600 rounded-md', {
        'border-red-500': props.error,
      })
    "
  />
</template>
