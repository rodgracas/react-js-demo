import React from 'react';

const numbers = [1, 2, 3, 4, 5];

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        // When you run this code, you’ll be given a warning that a key should be provided for list items. 
        // A “key” is a special string attribute you need to include when creating lists of elements. 
        // <li key={number.toString()}> {/*Keys help React identify which items have changed, are added, or are removed.*/}
        //     {number}
        // </li>

        //Keys only make sense in the context of the surrounding array.
        //For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements 
        //in the array rather than on the <li> element in the ListItem itself.
        <ListItem key={number.toString()} value={number} /> /*A good rule of thumb is that elements inside the map() call need keys.*/
    );

    return (
        <ul>{listItems}</ul>
    ); 

    // Or embedding any JSX expression, and inline the map() result...
    // return (
    //     <ul>
    //     {numbers.map((number) =>
    //         <ListItem key={number.toString()} value={number} />
    //     )}
    //     </ul>
    // );
}

/* 
Keys used within arrays should be unique among their siblings.
However they don’t need to be globally unique. 
We can use the same keys when we produce two different arrays
*/

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
            <li key={post.id}>
                {post.title}
            </li>
        )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

class ListsAndKeys extends React.Component {
    render() {
        return (
            <div className="ListsAndKeys">
                <NumberList numbers={numbers} />
                <Blog posts={posts} />
            </div>
        );
    }
}

// Keys - another example */
/*
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

Note:
We don’t recommend using indexes for keys if the order of items may change.
This can negatively impact performance and may cause issues with component state.

*/

export default ListsAndKeys;