export const add = () => {
  console.log('add running')
}
export const remove = () => {
  console.log('remove running')
}

export const update = () => {
  console.log('update running')
}

export const get = () => {
  console.log('get running')
}

export const watch = () => {
  console.log('watch running')
}

const actions = {
  add,
  remove,
  update,
  get,
  watch,
}

export default actions
