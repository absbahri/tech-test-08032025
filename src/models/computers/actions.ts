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

export const getAll = (computers: any, vesselId: number): Type[] => {
  let vesselComputers: Type[] = []

  computers.filter((computer) => {
    if (computer.vesselId === vesselId) {
      vesselComputers.push(computer)
    }
  })

  return vesselComputers
}

export const get = (computers: any, computerId: number): Type => {
  let computer: Type = {}

  const comp = computers.filter((comp) => {
    if (comp.id === computerId) {
      return comp
    }
  })

  if (comp.length > 0) {
    computer = comp[0]
  }

  return computer
}

const actions = {
  // add,
  // remove,
  // update,
  // watch,
  getAll,
}

export default actions
