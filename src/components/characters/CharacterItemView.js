import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

export default function({ item }) {
  return (
    <ListItem button dense>
      <Avatar src={item.image} />
      <ListItemText primary={item.name} />
    </ListItem>
  )
}
