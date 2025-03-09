<script lang="ts" setup>
import { cn } from '@/utils/cn'
import Wrapper from '@components/ui/modal/Wrapper.vue'
import Content from '@components/ui/modal/Content.vue'
import Footer from '@components/ui/modal/Foot.vue'
import Header from '@components/ui/modal/Head.vue'
import Button from '@components/ui/button/Button.vue'
const props = defineProps<{
  open: boolean
  onClose?: () => void
  action?: () => void
  title?: string
}>()
</script>

<template>
  <Wrapper :open="props.open" :onClose="props.onClose">
    <div
      class="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600"
    >
      <Header>
        <h2>{{ props.title }}</h2>
      </Header>
      <Content><slot /></Content>
      <Footer>
        <Button class="w-full" variant="primary" :onClick="props.action"
          >Submit</Button
        >
      </Footer>
    </div>
  </Wrapper>
</template>
