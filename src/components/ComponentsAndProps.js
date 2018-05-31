import React from 'react';

// Functional component
// function Welcome(props) {
//   return <h1>Welcome component: Hello, {props.name}</h1>;
// }

// Classes have some additional features... (state!)
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    } 
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

class ComponentsAndProps extends React.Component {
    render() {
        return ( 
            <div className="ComponentsAndProps">
                <Welcome name="Rodrigo" /> { /* Calls the Welcome component */ }
                <Comment date={comment.date} author={comment.author} text={comment.text} />
            </div>
        );
    }
}

export default ComponentsAndProps;

function formatDate(date) {
    return date.toLocaleDateString();
}


// Props are Read-Only

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