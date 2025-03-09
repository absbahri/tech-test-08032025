// domains/computers/store.ts
import { createStore } from '@/utils/pinia-factory'
import { type Type } from './'

const useShipStore = createStore<Type>({
  id: 'ships',
})

export default useShipStore
