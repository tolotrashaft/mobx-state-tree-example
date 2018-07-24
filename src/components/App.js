import React, { Component } from 'react'
import CharacterListView from './characters/CharacterListView'
import logo from '../logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MobX State Tree example</h1>
        </header>
        <CharacterListView />
      </div>
    )
  }
}

export default App
