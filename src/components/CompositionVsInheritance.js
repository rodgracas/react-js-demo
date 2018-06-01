import React from 'react';

/* Containment
Some components don’t know their children ahead of time. 
We recommend that such components use the special 'children' prop to pass children elements directly into their output
*/

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// function WelcomeDialog() {
//     return(
//         <FancyBorder color="yellow"> {/*Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.*/}
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }

function Contacts() {
    return <div className="Contacts" />;
}
  
function Chat() {
    return <div className="Chat" />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

/* Specialization
Sometimes we think about components as being “special cases” of other components. 
For example, we might say that a WelcomeDialog is a special case of Dialog.
*/

function Dialog(props) {
    return (
      <FancyBorder color="yellow">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }
  
function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
}

// Composition works equally well for components defined as classes:
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }
}

class CompositionVsInheritance extends React.Component {
    render() {
        return (
            <div className="CompositionVsInheritance">
                <WelcomeDialog />
                <SplitPane left={<Contacts />} right={<Chat />} />
                <SignUpDialog />
            </div>
        );
    }
}

export default CompositionVsInheritance;