import { types } from 'mobx-state-tree'

export const CharacterItem = types
  .model({
    name: types.string,
    gender: types.enumeration('gender', ['male', 'female']),
    house: types.optional(types.string, ''),
    image: types.maybe(types.string)
  })

export const CharacterList = types
  .model({
    items: types.optional(types.array(CharacterItem), [])
  })
  .actions(self => ({
    addItem: (item) => (self.items.push(item))
  }))
