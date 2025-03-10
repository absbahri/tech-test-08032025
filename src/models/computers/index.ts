import { Model, type Type } from './schema'
import Actions from './actions'
import Repo from './repo'
import useComputerStore, { useComputerEditStore } from './store'
import Sample from './sampledata'
export default {
  Model,
  Actions,
  Repo,
  useComputerStore,
  useComputerEditStore,
  Sample,
}
export { Model, Actions, Repo, useComputerStore, useComputerEditStore, Sample }
export type { Type }
