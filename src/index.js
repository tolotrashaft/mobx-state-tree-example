import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { WishList } from './models/WishList'

const wishList = WishList.create({
  items: [
    {
      name: 'Chronicles of Narnia',
      price: 28.73,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg/220px-The_Chronicles_of_Narnia_box_set_cover.jpg'
    },
    {
      name: 'Harry Potter',
      price: 29.50,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg/220px-The_Chronicles_of_Narnia_box_set_cover.jpg'
    }
  ]
})

ReactDOM.render(<App wishList={wishList}/>, document.getElementById('root'))
setInterval(() => wishList.items[0].changePrice(wishList.items[0].price + 10.0), 1000)

registerServiceWorker()
