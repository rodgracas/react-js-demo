import React from 'react';

// In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// We want to write this once and have the Clock update itself

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// To implement this, we need to add “state” to the Clock component.
// State is similar to props, but it is private and fully controlled by the component.

// Clock component (with state)
class Clock extends React.Component {
  
    // Add a class constructor that assigns the initial this.state:
    constructor(props) {
      super(props); // Class components should always call the base constructor with props.
      this.state = {date: new Date()}; // current time. We will later update this state.
    }
  
    // The componentDidMount() hook runs after the component output has been rendered to the DOM
    // When the Clock output is inserted in the DOM, React calls the componentDidMount()
    componentDidMount() { // These methods are called “lifecycle hooks”.
      this.timerID = setInterval(
        () => this.tick(),
        1000 // Every second the browser calls the tick() method.
      );
    }
  
    // If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
    componentWillUnmount() { // These methods are called “lifecycle hooks”.
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
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  class StateAndLifecycle extends React.Component {
      render() {
          return (
            <div className="StateAndLifecylce">
                <Clock />
            </div>
          );
      }
  }

  export default StateAndLifecycle;