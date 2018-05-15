import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

class App extends Component {
  render() {
    return(
      <div>
        <Board word="test"/>
      </div>
    );
  }
}


export default App;
