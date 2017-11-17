import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// React is pretty flexible but it has a single strict rule:
// All React components must act like pure functions with respect to their props.

// "Pure" function
// It does not attempt to change their inputs, and always return the same result for the same inputs.
function sum(a, b) {
  return a + b;
}

// In contrast, this function is impure because it changes its own input:
function withdraw(account, amount) {
  account.total -= amount;
}


// Functional component
function Welcome(props) {
  return <h1>Welcome component: Hello, {props.name}</h1>;
}

// Classes have some additional features... (state!)
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   } 
// }

function formatDate(date) {
  return date.toLocaleDateString();
}


// The Avatar doesn’t need to know that it is being rendered inside a Comment. 
// This is why we have given its prop a more generic name: user rather than author.

// We recommend naming props from the component’s own point of view rather than 
// the context in which it is being used.

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Espetáculo!',
  author: {
    name: 'Rodrigo',
    avatarUrl: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png'
  }
};

// We want to write this once and have the Clock update itself

// function Clock(props) {
  //   return (
    //     <div>
    //       <h1>Hello, world!</h1>
    //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
    //     </div>
    //   );
    // }
    
// To implement this, we need to add “state” to the Clock component.
// State is similar to props, but it is private and fully controlled by the component.

// Clock component with state
class Clock extends React.Component {
  
  // Add a class constructor that assigns the initial this.state:
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // current time. We will later update this state.
  }

  // The componentDidMount() hook runs after the component output has been rendered to the DOM
  // When the Clock output is inserted in the DOM, React calls the componentDidMount()
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 // Every second the browser calls the tick() method.
    );
  }

  // If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen.
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


// === Handling Events === 

function ActionLink() {
  
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>Click me</a>
  );
}

class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn : true};
  
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
    
    // Passing Arguments to Event Handlers
    {/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* This is a comment in JSX */}
        <Welcome name="Rodrigo" /> {/* Calls the Welcome component */}

        <Comment date={comment.date} author={comment.author} text={comment.text} />

        <p>Clock component:</p>
        <Clock />

        <Toggle />
      </div>
    );
  }
}

export default App;
