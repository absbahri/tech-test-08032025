<script lang="ts" setup>
import Button from '@components/ui/button/Button.vue'
import Wrapper from '@components/ui/card/Wrapper.vue'
import { ArrowRight } from 'lucide-vue-next'
const props = defineProps<{
  title: string
  link: string
  description?: string
}>()
</script>

<template>
  <Wrapper>
    <div class="h-full flex flex-col">
      <RouterLink to="{{ props.link }}" v-if="props.title">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-brand-tertiary dark:text-white"
        >
          {{ props.title }}
        </h5>
      </RouterLink>
      <div class="mb-2" v-if="description">
        <p>{{ description }}</p>
      </div>
      <slot />
      <div class="mt-auto">
        <RouterLink :to="props.link">
          <Button variant="secondary" class="mt-6">
            View more <ArrowRight />
          </Button>
        </RouterLink>
      </div>
    </div>
  </Wrapper>
</template>
