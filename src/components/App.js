import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import WishListView from './wishlist/WishListView'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">MobX State Tree example</h1>
        </header>
        <WishListView wishList={this.props.wishList}/>
      </div>
    )
  }
}

export default App
