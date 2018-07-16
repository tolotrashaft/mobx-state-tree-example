import React from 'react'
import { observer } from 'mobx-react'
import WishListItemView from './WishListItemView'

import './WishList.css'

const WishListView = ({ wishList }) => (
  <div className='list'>
    <ul>
      {wishList.items.map((item, index) => <WishListItemView key={index} item={item}/>)}
    </ul>
    <b>Total Price : {wishList.totalPrice.toFixed(2)}</b>
  </div>
)

export default observer(WishListView)
