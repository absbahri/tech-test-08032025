import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type Type } from './'

const useComputerStore = defineStore('computers', () => {
  const state = ref<Type[]>([])

  const update = (id: Type['id'], updatedFields: Partial<Type>) => {
    const index = state.value.findIndex((item) => item.id === id)
    if (index !== -1) {
      state.value[index] = { ...state.value[index], ...updatedFields }
    }
  }

  const push = (newItems: Type[]) => {
    newItems.forEach((newItem) => {
      put(newItem)
    })
  }

  const put = (newItem: Type) => {
    const index = state.value.findIndex((item) => item.id === newItem.id)
    if (index !== -1) {
      state.value[index] = newItem
    } else {
      state.value.push(newItem)
    }
  }

  const remove = (id: Type['id']) => {
    state.value = state.value.filter((item) => item.id !== id)
  }

  const get = (id: Type['id']): Type | undefined => {
    return state.value.find((item) => item.id === id)
  }

  const getAll = (): Type[] => {
    return state.value
  }

  return { state, get, getAll, update, put, remove, push }
})

export default useComputerStore
