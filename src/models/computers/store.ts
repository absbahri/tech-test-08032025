// domains/computers/store.ts
import { createStore } from '@/utils/pinia-factory'
import { type Type } from './'

const useComputerStore = createStore<Type>({
  id: 'computers',
})

export default useComputerStore
