import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface BaseItem {
  id?: string | number // Made optional
}

interface StoreOptions {
  id?: string
}

type OptionalId<T extends BaseItem> = Omit<T, 'id'> & { id?: string | number }

export function createStore<T extends BaseItem>({
  id = 'defaultStore',
}: StoreOptions = {}) {
  console.log('createStore running')
  return defineStore(id, () => {
    const items: Ref<T[]> = ref([])

    const put = (newItem: OptionalId<T>) => {
      if (!newItem.id) {
        newItem.id = Date.now() // Generate a unique ID if not provided
      }
      const index = items.value.findIndex((item) => item.id === newItem.id)
      if (index !== -1) {
        items.value[index] = newItem as T
      } else {
        items.value.push(newItem as T)
      }
    }

    // Adds or updates multiple items in bulk
    const push = (newItems: OptionalId<T>[]) => {
      newItems.forEach((newItem) => {
        put(newItem)
      })
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

    return { items, put, patch, remove, getById, getAll, push }
  })()
}
