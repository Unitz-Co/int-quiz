import { capitalize } from 'lodash'

export const API = 'https://breakable-trousers-hare.cyclic.app'
export const byName = (name) => {
  return capitalize(name.split('Collection').at(0))
}
