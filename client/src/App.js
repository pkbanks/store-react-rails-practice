import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoresContainer from './components/StoresContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pop!</h1>
        <StoresContainer />
      </div>
    );
  }
}

export default App;
