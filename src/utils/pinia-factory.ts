// storeFactory.ts
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface BaseItem {
  id?: string | number
}

interface StoreOptions {
  id: string
}

export function createStore<T extends BaseItem>({ id }: StoreOptions) {
  return defineStore(id, () => {
    const state: Ref<T[]> = ref([])

    const update = (id: T['id'], updatedFields: Partial<T>) => {
      const index = state.value.findIndex((item) => item.id === id)
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...updatedFields }
      }
    }

    const push = (newItems: T[]) => {
      newItems.forEach((newItem) => {
        put(newItem)
      })
    }

    const put = (newItem: T) => {
      const index = state.value.findIndex((item) => item.id === newItem.id)
      if (index !== -1) {
        state.value[index] = newItem
      } else {
        state.value.push(newItem)
      }
    }

    const remove = (id: T['id']) => {
      state.value = state.value.filter((item) => item.id !== id)
    }

    const get = (id: T['id']): T | undefined => {
      return state.value.find((item) => item.id === id)
    }

    const getAll = (): T[] => {
      return state.value
    }

    return { state, get, getAll, update, put, remove, push }
  })
}
