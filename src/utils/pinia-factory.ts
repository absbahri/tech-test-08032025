// src/stores/factory.ts
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface BaseItem {
  id: string | number
}

interface StoreOptions<T extends BaseItem> {
  id: string
}

export function createStore<T extends BaseItem>({ id }: StoreOptions<T>) {
  return defineStore(id, () => {
    const items: Ref<T[]> = ref([])

    const put = (newItem: T) => {
      const index = items.value.findIndex((item) => item.id === newItem.id)
      if (index !== -1) {
        items.value[index] = newItem
      } else {
        items.value.push(newItem)
      }
    }

    const patch = (id: T['id'], updatedFields: Partial<T>) => {
      const index = items.value.findIndex((item) => item.id === id)
      if (index !== -1) {
        items.value[index] = { ...items.value[index], ...updatedFields }
      }
    }

    const remove = (id: T['id']) => {
      items.value = items.value.filter((item) => item.id !== id)
    }

    const getById = (id: T['id']): T | undefined => {
      return items.value.find((item) => item.id === id)
    }

    const getAll = (): T[] => {
      return items.value
    }

    return { items, put, patch, remove, getById, getAll }
  })
}
