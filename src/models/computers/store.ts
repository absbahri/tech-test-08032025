import { createStore } from '@/utils/pinia-factory'
import { type Type } from './'
const store = createStore<Type>({
  id: 'computers',
})

export default store
