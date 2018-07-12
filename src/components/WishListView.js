import React from 'react'
import { observer } from 'mobx-react'
import WishListItemView from './WishListItemView'

const WishListView = ({ wishList }) => (
  <div className='list'>
    <ul>
      {wishList.items.map((item, index) => <WishListItemView key={index} item={item}/>)}
    </ul>
    <b>Total Price : {wishList.totalPrice}</b>
  </div>
)

export default observer(WishListView)
