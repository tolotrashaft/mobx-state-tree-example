import React from 'react'

const WishListItemView = ({ item }) => (
  <li className='item'>
    {item.image && <img style={{ width: 60, height: 90 }} src={item.image} alt=''/>}
    <h3>{item.name}</h3>
    <span>{item.price}</span>
  </li>
)

export default WishListItemView
