import React from 'react'
import { observer } from 'mobx-react'
import { CharacterList } from '../../models/CharacterList'
import CharacterItemView from './CharacterItemView'
import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: CharacterList.create({}),
      searchText: ''
    }
  }

  componentDidMount() {
    this.state.store.load()
  }

  onChangeText = event => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    const { loading } = this.state.store
    const items = this.state.store.search(this.state.searchText)
    if (loading) {
      return <CircularProgress thickness={7} />
    }

    return (
      <div className="list">
        <Input
          onChange={this.onChangeText}
          placeholder="Search character"
          style={styles.searchInput}
          disableUnderline={true}
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />
        <List>
          {items &&
            items.map((item, index) => (
              <CharacterItemView key={index} item={item} />
            ))}
        </List>
      </div>
    )
  }
}

const styles = {
  searchInput: {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: 16,
    margin: '20px',
    padding: '10px 12px',
    width: 'calc(100% - 64px)',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}

export default observer(CharacterListView)
