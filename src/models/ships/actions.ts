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

export const get = (ships: any, vesselId: number): Type => {
  let vessel: Type = {}

  const ship = ships.filter((ship) => {
    if (ship.id === vesselId) {
      return ship
    }
  })

  if (ship.length > 0) {
    vessel = ship[0]
  }
  console.log(vessel)
  return vessel
}

const actions = {
  // add,
  // remove,
  // update,
  // watch,
  get,
}

export default actions
