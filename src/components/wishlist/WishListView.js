import React from 'react'
import { observer } from 'mobx-react'
import WishListItemView from './WishListItemView'
import List from '@material-ui/core/List'

import './WishList.css'

const WishListView = ({ wishList }) => (
  <div className="list">
    <List>
      {wishList &&
        wishList.items.map((item, index) => (
          <WishListItemView key={index} item={item} />
        ))}
    </List>
    <b>Total Price : {wishList && wishList.totalPrice.toFixed(2)}</b>
  </div>
)

export default observer(WishListView)
