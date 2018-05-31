import React from 'react';

/* 
Often, several components need to reflect the same changing data. 
We recommend lifting the shared state up to their closest common ancestor. 
Let’s see how this works in action.

In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.
*/

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

/* 
Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.
We can start by extracting a TemperatureInput component from Calculator.
We will add a new scale prop to it that can either be "c" or "f":
*/
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/* 
For example, tryConvert('abc', toCelsius) returns an empty string, and tryConvert('10.22', toFahrenheit) returns '50.396'
*/
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    //   this.state = {temperature: ''};
    }
  
    handleChange(e) {
    //   this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      //const temperature = this.state.temperature;
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      );
    }
}

//Recap: https://reactjs.org/docs/lifting-state-up.html#lifting-state-up

class Calculator extends React.Component {  
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahreneitChange = this.handleFahreneitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahreneitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahreneitChange} />
                
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}


class LiftingStateUp extends React.Component {
    render() {
        return (
            <div className="LiftingStateUp">
                <Calculator />
            </div>
        );
    }
}

export default LiftingStateUp;