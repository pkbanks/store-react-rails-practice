import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersContainer from './components/UsersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pop!</h1>
        <UsersContainer />
      </div>
    );
  }
}

export default App;
