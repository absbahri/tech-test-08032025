<script lang="ts" setup>
import Label from '@components/ui/fields/Label.vue'
import Helper from '@components/ui/fields/Helper.vue'
import { cn } from '@/utils/cn'

type TOptions = {
  label: string
  value: string
}

type TCheckbox = {
  id?: string
  name: string
  options: TOptions[]
  required?: boolean
  disabled?: boolean
  error?: string
  modelValue: string[]
}

const props = defineProps<TCheckbox>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string[]): void }>()

const handleChange = (value: string) => {
  const newValues = props.modelValue.includes(value)
    ? props.modelValue.filter((v) => v !== value)
    : [...props.modelValue, value]

  emit('update:modelValue', newValues)
}
</script>

<template>
  <ul>
    <li
      v-for="option in props.options"
      :key="option.value"
      class="flex flex-col gap-2"
    >
      <Label :id="option.value" :text="option.label" :error="props.error" />
      <input
        :id="option.value"
        type="checkbox"
        :value="option.value"
        :name="props.name"
        :required="props.required"
        :disabled="props.disabled"
        :checked="props.modelValue.includes(option.value)"
        @change="handleChange(option.value)"
        :class="
          cn('border border--brand-tertiary dark:border-gray-600 rounded-md', {
            'border-red-500': props.error,
          })
        "
      />
      <Helper :text="props.error" :error="props.error" />
    </li>
  </ul>
</template>
