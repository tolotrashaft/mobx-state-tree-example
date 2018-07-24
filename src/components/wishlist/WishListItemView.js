import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

const WishListItemView = ({ item }) => (
  <ListItem>
    <Avatar src={item.image} alt="">
      <ImageIcon />
    </Avatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
  </ListItem>
)

export default WishListItemView
