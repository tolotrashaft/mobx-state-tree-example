import { flow, types } from "mobx-state-tree";
import { getCharacters } from "../api";

export const CharacterItem = types.model({
  name: "",
  gender: types.optional(
    types.enumeration("gender", ["male", "female"]),
    "male"
  ),
  house: types.optional(types.string, ""),
  image: types.maybe(types.string),
});

export const CharacterList = types
  .model({
    items: types.optional(types.array(CharacterItem), []),
    loading: true,
  })
  .actions(self => ({
    load: flow(function*() {
      self.items = [];
      self.items = yield getCharacters();
      self.loading = false;
    }),
    add: item => {
      self.items.push(item);
    },
  }))
  .views(self => ({
    search: function(name) {
      const regex = new RegExp(`${name.trim()}`, "i");
      const items = self.items.filter(item => item.name.search(regex) >= 0);
      return items;
    },
  }));
