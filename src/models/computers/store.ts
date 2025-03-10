// domains/computers/store.ts
import { createStore } from '@/utils/pinia-factory'
import { type Type } from './'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useComputerStore = createStore<Type>({
  id: 'computers',
})

export default useComputerStore

export const useComputerEditStore = defineStore('computers-edit', () => {
  const store = ref<null | Type>(null)

  const set = (computer: Type) => {
    store.value = computer
  }
  const unset = () => {
    store.value = null
  }

  return { store, set, unset }
})
