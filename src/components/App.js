import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { getCharacters } from '../api'
import { CharacterList } from '../models/CharacterList'

import CharacterListView from './characters/CharacterListView'
import logo from '../logo.svg'
import './App.css'

@observer
class App extends Component {
  state = {
    store: {}
  }

  componentDidMount() {
    getCharacters()
      .then(response => {
        let store = CharacterList.create({ items: response })
        this.setState({ store })
      })
  }

  render() {
    const { store } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">MobX State Tree example</h1>
        </header>
        <CharacterListView items={store.items}/>
      </div>
    )
  }
}

export default App
