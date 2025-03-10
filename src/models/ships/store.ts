// domains/computers/store.ts
import { createStore } from '@/utils/pinia-factory'
import { type Type } from './'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useShipStore = createStore<Type>({
  id: 'ships',
})

export default useShipStore

export const useShipEditStore = defineStore('ships-edit', () => {
  const store = ref<null | Type>(null)

  const set = (computer: Type) => {
    store.value = computer
  }
  const unset = () => {
    store.value = null
  }

  return { store, set, unset }
})
