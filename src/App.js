import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentsAndProps from './components/ComponentsAndProps';
import StateAndLifecycle from './components/StateAndLifecycle';
import HandlingEvents from './components/HandlingEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {/* This is a comment in JSX */}
        
        <ComponentsAndProps />
        <StateAndLifecycle />
        <HandlingEvents />
      </div>
    );
  }
}

export default App;
