<script lang="ts" setup>
import Label from '@components/ui/fields/Label.vue'
import Helper from '@components/ui/fields/Helper.vue'

type TField = {
  label: string
  description?: string
  error?: string
}

const props = defineProps<TField>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label :id="props.label" :text="props.label" :error="props.error" />
    <slot name="input" :error="props.error" />
    <Helper :text="props.error" :error="props.error" />
  </div>
</template>
