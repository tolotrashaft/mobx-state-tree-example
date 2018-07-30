import React, { Component } from "react";
import "./App.css";
import CharacterListView from "./characters/CharacterListView";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharacterListView />
      </div>
    );
  }
}

export default App;
