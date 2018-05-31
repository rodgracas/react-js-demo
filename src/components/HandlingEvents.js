import React from 'react';

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
      
      
    }
}
  
// Passing Arguments to Event Handlers
{/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
{/*<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>*/}

class HandlingEvents extends React.Component {
    render() {
        return (
            <div className="HandlingEvents">
                <Toggle />
            </div>
        );
    }
}

export default HandlingEvents;