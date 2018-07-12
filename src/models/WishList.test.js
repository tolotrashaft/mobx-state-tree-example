import { WishList, WishListItem } from './WishList'

it('can create a WishList item', () => {
  const data = {
    'name': 'Chronicles of Narnia',
    'price': 28.73,
    'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg/220px-The_Chronicles_of_Narnia_box_set_cover.jpg'
  }
  const item = WishListItem.create(data)
  expect(item.price).toBe(28.73)
  item.changeName('Narnia')
  expect(item.name).toBe('Narnia')
})

it('can create a WishList', () => {
  const items = [
    {
      'name': 'Chronicles of Narnia',
      'price': 28.73
    }
  ]
  const list = WishList.create({ items })
  expect(list.items.length).toBe(1)
})