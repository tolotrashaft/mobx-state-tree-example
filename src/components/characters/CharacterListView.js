import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class CharacterListView extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div className='list'>
        <ul>
          {items && items.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}
