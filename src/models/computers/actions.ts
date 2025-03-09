import type { Type } from './'

// export const add = () => {
//   console.log('add running')
// }
// export const remove = () => {
//   console.log('remove running')
// }
// export const update = () => {
//   console.log('update running')
// }
// export const watch = () => {
//   console.log('watch running')
// }

export const get = (computers: any, vesselId: number): Type[] => {
  let vesselComputers: Type[] = []

  computers.filter((computer) => {
    if (computer.vesselId === vesselId) {
      vesselComputers.push(computer)
    }
  })

  return vesselComputers
}

const actions = {
  // add,
  // remove,
  // update,
  // watch,
  get,
}

export default actions
