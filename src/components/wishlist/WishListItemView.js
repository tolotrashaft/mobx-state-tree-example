import React from 'react'

const WishListItemView = ({ item }) => (
  <li className='item'>
    {item.image && <img style={{ width: 60, height: 90 }} src={item.image} alt=''/>}
    <div>
      <h3>{item.name}</h3>
      <span>{item.price.toFixed(2)}</span>
    </div>
  </li>
)

export default WishListItemView
